import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/Navigation/Navigation'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import Loader from 'components/Loader/Loader'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'))

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <>
      <Navigation />
      <div className='app-container container'>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
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
