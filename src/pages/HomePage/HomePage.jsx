import { useState, useEffect } from 'react'
import MovieList from 'components/MovieList/MovieList'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { getTrendingMovies } from 'api/movies-api'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const data = await getTrendingMovies()
        setMovies(data.results)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader style='section' />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MovieList data={movies} />}
    </div>
  )
}

export default HomePage
