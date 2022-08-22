import React from 'react'
import useCounter from './useCounter';
import Card from '../UI/Card';

const BackwardCounter = () => {
    const counter = useCounter(false);
    return (
        <div className='bg-black w-full h-16 mt-2 text-2xl font-bold text-center text-white'>
        Backward Counter<br></br>
         {counter}
      </div>
    )
}

export default BackwardCounter
