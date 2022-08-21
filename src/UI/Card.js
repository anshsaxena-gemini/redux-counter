import React from 'react'

function Card(props) {
  return (
    <div className='grid place-items-center'>
    <div className='h-96 w-1/2 mt-3 bg-pink-50 rounded-lg'>
    {props.children}
    </div>
    </div>
  )
}

export default Card