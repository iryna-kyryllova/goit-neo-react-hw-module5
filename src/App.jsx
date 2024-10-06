import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import Loader from 'components/Loader/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <>
      <div className='app-container container'>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
      </div>
      <Toaster position='top-right' />
    </>
  )
}

export default App
