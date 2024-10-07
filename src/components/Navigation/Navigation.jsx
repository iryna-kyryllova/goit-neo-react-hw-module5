import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <ul className={styles.menu}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
