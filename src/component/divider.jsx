import React from 'react'

const Divider = (props) => {
    console.log(props)
  return (
    <div className='w-full h-[1px] mt-5 mb-5 bg-black'>
        <span className='relative -top-3 font-lg w-full left-[130px] bg-white p-3 text-slate-500'>{props.name}</span>
    </div>
  )
}

export default Divider