import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosStar } from 'react-icons/io'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { getMovieReviews } from 'api/movies-api'
import { formatDate } from 'utils/helpers'
import styles from './MovieReviews.module.css'

const MovieReviews = () => {
  const [reviews, setreviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { movieId } = useParams()

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const { results } = await getMovieReviews(movieId)
        setreviews(results)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [movieId])

  return (
    <div>
      {isLoading && <Loader style='section' />}
      {isError && <ErrorMessage />}
      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map((item) => (
            <li key={item.id} className={styles.item}>
              <strong className={styles.name}>
                {item.author_details.name || item.author_details.username}
              </strong>
              <div className={styles.subtitle}>
                {item.author_details.rating > 0 && (
                  <div className={styles.rating}>
                    <IoIosStar className={styles.ratingIcon} />
                    <strong className={styles.ratingNumber}>
                      {item.author_details.rating * 10}%
                    </strong>
                  </div>
                )}
                {item.created_at && (
                  <time dateTime={item.created_at} className={styles.date}>
                    Written on {formatDate(item.created_at)}
                  </time>
                )}
              </div>
              <p className={styles.content}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No reviews found.</p>
      )}
    </div>
  )
}

export default MovieReviews
