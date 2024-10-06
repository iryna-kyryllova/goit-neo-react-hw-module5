import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/Navigation/Navigation'
import HomePage from 'pages/HomePage/HomePage'
import MoviesPage from 'pages/MoviesPage/MoviesPage'
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from 'components/MovieCast/MovieCast'
import MovieReviews from 'components/MovieReviews/MovieReviews'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import Loader from 'components/Loader/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <>
      <Navigation />
      <div className='app-container container'>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Toaster position='top-right' />
    </>
  )
}

export default App
