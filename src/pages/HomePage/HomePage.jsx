import { useState, useEffect } from 'react'
import MovieList from 'components/MovieList/MovieList'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { getTrendingMovies } from 'api/movies-api'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
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
      {isError && <ErrorMessage />}
      {isLoading && <span>Loading...</span>}
      {movies && <MovieList data={movies} />}
    </div>
  )
}

export default HomePage
