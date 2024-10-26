import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
    <FaSpinner className="animate-spin h-5 w-5 text-blue-500" />
  </div>
  )
}

export default Spinner