import { InfinitySpin } from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = ({ style = 'page' }) => {
  if (style === 'section') {
    return <div className={styles.sectionLoader}>Loading...</div>
  }

  return (
    <div className={styles.pageLoader}>
      <InfinitySpin visible={true} width='200' color='#032541' ariaLabel='infinity-spin-loading' />
    </div>
  )
}

export default Loader
