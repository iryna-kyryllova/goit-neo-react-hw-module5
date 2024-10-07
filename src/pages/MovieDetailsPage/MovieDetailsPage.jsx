import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Loader from 'components/Loader/Loader'

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
      <Suspense fallback={<Loader style='section' />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetailsPage
