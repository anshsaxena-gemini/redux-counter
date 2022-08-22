import  { useEffect, useState } from 'react'

function useCounter(forwards=true) {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
   const intervel = setInterval(()=>{
    if(forwards){
        setCounter((prevCounter)=>prevCounter + 1)
    }
    else{
        setCounter((prevCounter)=>prevCounter - 1)
    }
    },1000);
    return () => clearInterval(intervel)
  },[])
  return counter
}

export default useCounter