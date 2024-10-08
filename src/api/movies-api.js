import axios from 'axios'

const MOVIE_API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTY2ZTNjZDVkOGMwMTRkNmU0MDZkOGFiYTA1NWE4OCIsIm5iZiI6MTcyODIyNzM1NS45ODY3ODgsInN1YiI6IjVkODFmYTg2ZDM0ZWIzMDAyNDUwMWU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t59zTJKFsVQvmO6E5K2qqIba1uje4uiv3Q-j2FQhP8E'

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500'
export const DEFAULT_IMG =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common['Authorization'] = `Bearer ${MOVIE_API_KEY}`

export const getTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day')
  return data
}

export const searchMovies = async (query) => {
  const { data } = await axios.get('search/movie', {
    params: {
      query
    }
  })
  return data
}

export const getMovie = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`)
  return data
}

export const getMovieCast = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`)
  return data
}

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`)
  return data
}
