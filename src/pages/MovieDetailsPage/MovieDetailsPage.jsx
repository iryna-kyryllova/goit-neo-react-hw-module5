import { NavLink, Outlet } from 'react-router-dom'

const MovieDetailsPage = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/movies/:movieId/cast'>Cast</NavLink>
        </li>
        <li>
          <NavLink to='/movies/:movieId/reviews'>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default MovieDetailsPage
