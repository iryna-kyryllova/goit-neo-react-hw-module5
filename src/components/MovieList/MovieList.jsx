import { Link, useLocation } from 'react-router-dom'
import { POSTER_URL, DEFAULT_IMG } from 'api/movies-api'
import { formatDate } from 'utils/helpers'
import styles from './MovieList.module.css'

const MovieList = ({ data }) => {
  const location = useLocation()

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location} className={styles.item}>
            <img
              src={item.poster_path ? POSTER_URL + item.poster_path : DEFAULT_IMG}
              className={styles.img}
              alt={item.title}
            />
            <div className={styles.info}>
              <h2 className={styles.title}>{item.title}</h2>
              <time dateTime={item.release_date} className={styles.date}>
                {formatDate(item.release_date)}
              </time>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
