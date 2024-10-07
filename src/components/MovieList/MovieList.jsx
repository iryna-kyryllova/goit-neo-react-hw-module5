import { Link } from 'react-router-dom'
import { POSTER_URL } from 'api/movies-api'
import { formatDate } from 'utils/helpers'
import styles from './MovieList.module.css'

const MovieList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} className={styles.item}>
            <img
              src={
                item.poster_path
                  ? `${POSTER_URL}${item.poster_path}`
                  : 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
              }
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
