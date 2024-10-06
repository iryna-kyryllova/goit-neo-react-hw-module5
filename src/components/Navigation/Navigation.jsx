import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/movies'>Movies</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
