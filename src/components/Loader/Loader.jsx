import { InfinitySpin } from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <InfinitySpin visible={true} width='100' color='#0acf83' ariaLabel='infinity-spin-loading' />
    </div>
  )
}

export default Loader
