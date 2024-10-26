import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate=useNavigate()
  return (
    <>
    <div className="grid m-auto justify-center">
  <button className="text-blue-500 underline m-auto" onClick={() => navigate("/")}>
    Back
  </button>

    </div>
  <div className="flex justify-center items-center">
    <h1 className="text-lg font-semibold">Looks like you are lost</h1>
  </div>
</>

  )
}

export default Notfound