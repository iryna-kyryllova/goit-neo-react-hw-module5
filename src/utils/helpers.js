export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
}

export const getYear = (dateStr) => {
  const date = new Date(dateStr)
  return date.getFullYear()
}

export const calculateRuntime = (time) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  return `${hours}h ${minutes}m`
}

export const modifyAmount = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
