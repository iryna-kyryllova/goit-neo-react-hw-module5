import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import SearchForm from 'components/SearchForm/SearchForm'
import MovieList from 'components/MovieList/MovieList'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { searchMovies } from 'api/movies-api'

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const searchQuery = searchParams.get('query') ?? ''

  useEffect(() => {
    if (!searchQuery) return

    const fetchMovies = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const { results } = await searchMovies(searchQuery)
        if (!results.length) {
          toast('No movies found. Please try another search.')
          return
        }
        setMovies(results)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovies()
  }, [searchQuery])

  const handleSearch = (searchStr) => {
    setMovies([])
    setSearchParams({ query: searchStr })
  }

  return (
    <div>
      <SearchForm value={searchQuery} onSubmit={handleSearch} />
      {isLoading && <Loader style='section' />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MovieList data={movies} />}
    </div>
  )
}

export default MoviesPage
