import React from 'react'

const DefaultInput = ({type,className,placeholder,name,onchange,value}:any) => {
  return (
    <input type={type} name={name} placeholder={placeholder} id="" className={` ${ className} border-[1px] border-gray-500 p-2 placeholder:text-gray-500 rounded-md`} value={value} onChange={onchange}/>
  )
}

export default DefaultInput