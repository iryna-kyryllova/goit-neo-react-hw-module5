import { useState, useEffect, useRef, Suspense } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { IoIosStar } from 'react-icons/io'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { getMovie, POSTER_URL, DEFAULT_IMG } from 'api/movies-api'
import { formatDate, getYear, calculateRuntime, modifyAmount } from 'utils/helpers'
import styles from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const location = useLocation()
  const backLink = useRef(location.state ?? '/movies')

  const { movieId } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const data = await getMovie(movieId)
        setMovie(data)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [movieId])

  return (
    <div>
      <Link to={backLink.current} className={styles.back}>
        <MdOutlineKeyboardBackspace />
        Go back
      </Link>
      {isLoading && <Loader style='section' />}
      {isError && <ErrorMessage />}
      {movie && (
        <div className={styles.holder}>
          <section className={styles.info}>
            <img
              src={movie.poster_path ? POSTER_URL + movie.poster_path : DEFAULT_IMG}
              className={styles.img}
              alt='Poster'
            />
            <div className={styles.description}>
              {movie.title && (
                <h1 className={styles.title}>
                  {movie.title}
                  {movie.release_date ? <span> • {getYear(movie.release_date)}</span> : null}
                </h1>
              )}
              <div className={styles.indicators}>
                <span>
                  {movie.release_date && (
                    <time dateTime={movie.release_date}>{formatDate(movie.release_date)}</time>
                  )}
                  {movie.origin_country.length > 0 && <span> ({movie.origin_country[0]})</span>}
                </span>
                {movie.genres.length > 0 && (
                  <ul className={styles.genres}>
                    {movie.genres.map((genre) => (
                      <li key={genre.id} className={styles.genre}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                )}
                {movie.runtime > 0 && (
                  <span className={styles.runtime}>{calculateRuntime(movie.runtime)}</span>
                )}
              </div>
              {movie.vote_average > 0 && (
                <div className={styles.rating}>
                  <IoIosStar className={styles.ratingIcon} />
                  <strong className={styles.ratingNumber}>{movie.vote_average}</strong>
                </div>
              )}
              {movie.tagline && <p className={styles.tag}>&quot;{movie.tagline}&quot;</p>}
              {movie.overview && (
                <div className={styles.overview}>
                  <strong className={styles.overviewTitle}>Overview</strong>
                  <p className={styles.overviewText}>{movie.overview}</p>
                </div>
              )}
              <ul className={styles.additional}>
                {movie.original_title && (
                  <li className={styles.additionalItem}>
                    <strong>Original Title:</strong>
                    {movie.original_title}
                  </li>
                )}
                {movie.status && (
                  <li className={styles.additionalItem}>
                    <strong>Status:</strong>
                    {movie.status}
                  </li>
                )}
                {movie.budget > 0 && (
                  <li className={styles.additionalItem}>
                    <strong>Budget:</strong>${modifyAmount(movie.budget)}
                  </li>
                )}
                {movie.revenue > 0 && (
                  <li className={styles.additionalItem}>
                    <strong>Revenue:</strong>${modifyAmount(movie.revenue)}
                  </li>
                )}
              </ul>
            </div>
          </section>
          <section className={styles.tabs}>
            <ul className={styles.tabsHeader}>
              <li>
                <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader style='section' />}>
              <div className={styles.tabsContent}>
                <Outlet />
              </div>
            </Suspense>
          </section>
        </div>
      )}
    </div>
  )
}

export default MovieDetailsPage
