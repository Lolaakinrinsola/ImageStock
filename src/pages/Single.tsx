import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import Card from '../components/Card'
import useStore from '../Utils/Store'

const Single = () => {
    const navigate=useNavigate()
  const { items} = useStore();
  const {state:routerState}=useLocation()
  const item = items.find((item :any)=> item.id === routerState.id)

  return (
    <>
        <button
      className="flex items-center text-black text-[15px] underline hover:text-green-800 mx-10 transition-colors"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft className="mr-1" />
      Back
    </button>
        <div className="flex justify-center mb-5">
            <Card image={item.path}  title={item.title} createdAt={item.createdAt} username={item.user} id={item.id}/>
        </div>
       </>
  )
}

export default Single