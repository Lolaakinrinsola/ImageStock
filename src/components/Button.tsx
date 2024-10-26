import React from 'react'

const Button = ({text,color,onClick,className,type,disabled}:any) => {
  return (
    <button type={type} className={`${className} border-[1px] ${color?` border-${color} text-${color}  hover:bg-slate-400`:'border-green-500 text-green-500'} hover:bg-white rounded-md p-2 ${disabled&&'!bg-slate-400'}`} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default Button