
import Card from '../UI/Card';
import useCounter from './useCounter'

 const ForwardCounter = () => {
  const counter = useCounter();
  return (
    <div className='bg-black w-full h-16 text-2xl font-bold text-center text-white'>
      Forward Counter<br></br>
       {counter}
    </div>
  )

}

export default ForwardCounter