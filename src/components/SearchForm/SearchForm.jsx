import { useState } from 'react'
import toast from 'react-hot-toast'
import { IoSearchOutline } from 'react-icons/io5'
import styles from './SearchForm.module.css'

const SearchForm = ({ value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchStr = inputValue.trim()
    if (!searchStr) {
      toast.error('Search field can not be empty. Please enter the movie title')
      return
    }
    onSubmit(searchStr)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        name='search'
        autoComplete='off'
        autoFocus
        placeholder='Search by movie title'
      />
      <button type='submit' className={styles.btn}>
        <IoSearchOutline className={styles.icon} />
      </button>
    </form>
  )
}

export default SearchForm
