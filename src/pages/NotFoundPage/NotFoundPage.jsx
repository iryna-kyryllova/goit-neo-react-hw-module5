import { Link } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import NotFoundImg from 'img/not_found.svg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div>
      <Link to='/' className={styles.back}>
        <MdOutlineKeyboardBackspace />
        Go Home
      </Link>
      <div className={styles.imgHolder}>
        <img src={NotFoundImg} className={styles.img} alt='Page not found' />
      </div>
    </div>
  )
}

export default NotFoundPage
