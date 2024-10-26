import React from 'react'
import Spinner from './Spinner'

const Button = ({text,color,onClick,className,type,disabled,loading}:any) => {
  return (
    <button type={type} className={`${className} border-[1px] ${color?` border-${color} text-${color}  hover:bg-slate-400`:'border-green-500 text-green-500'} hover:bg-white rounded-md p-2 ${disabled&&'!bg-slate-400'}`} onClick={onClick} disabled={disabled&&loading}>{loading?<div className="flex gap-2">
      <Spinner/>
      Loading...
    </div>:text}</button>
  )
}

export default Button