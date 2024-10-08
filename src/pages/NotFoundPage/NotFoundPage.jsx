import NotFoundImg from 'img/not_found.svg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.content}>
      <img src={NotFoundImg} className={styles.img} alt='Page not found' />
    </div>
  )
}

export default NotFoundPage
