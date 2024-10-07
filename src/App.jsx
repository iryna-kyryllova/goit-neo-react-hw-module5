import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/Navigation/Navigation'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import Loader from 'components/Loader/Loader'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'))

const App = () => {
  return (
    <>
      <Navigation />
      <div className='app-container container'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Toaster position='top-right' />
    </>
  )
}

export default App
