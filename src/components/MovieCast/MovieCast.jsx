import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { getMovieCast, POSTER_URL, DEFAULT_IMG } from 'api/movies-api'
import styles from './MovieCast.module.css'

const MovieCast = () => {
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { movieId } = useParams()

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const { cast } = await getMovieCast(movieId)
        setCast(cast)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCast()
  }, [movieId])

  return (
    <div>
      {isLoading && <Loader style='section' />}
      {isError && <ErrorMessage />}
      {cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map((item) => (
            <li key={item.cast_id} className={styles.item}>
              <img
                src={item.profile_path ? POSTER_URL + item.profile_path : DEFAULT_IMG}
                className={styles.img}
                alt={item.name}
              />
              <div className={styles.info}>
                {item.name && <h2 className={styles.name}>{item.name}</h2>}
                {item.character && <span className={styles.character}>{item.character}</span>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No cast found.</p>
      )}
    </div>
  )
}

export default MovieCast
