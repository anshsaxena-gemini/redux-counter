import React from 'react'

function Button(props) {
  return (
    <div>
    <button
    className='h-10 w-28 text-center text-white bg-violet-600 text-xl rounded-md'
    type={props.type || 'button'}
    onClick={props.onClick}
    >
        {props.children}
    </button>

    </div>
  )
}

export default Button