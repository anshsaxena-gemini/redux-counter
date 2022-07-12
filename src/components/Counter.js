import React,{useSelector,useDispatch} from 'react-redux'
import Button from '../UI/Button'
import Card from '../UI/Card'


function Counter() {
const dispatch = useDispatch();
 const counter = useSelector(state => state.counter)
 const increment = () =>{
      dispatch({type:"increment",amount:5})
 }
 const decrement = () =>{
    dispatch({type:"decrement",amount:5})
 }

  return (
    <div>
     <Card>
      <div className='text-center mt-3 text-4xl font-semibold text-violet-600 uppercase'>
        Counter
      </div>
      <div className='text-center text-violet-600 text-6xl mt-6'>{counter}</div>
      <div className='grid place-content-center mt-8'>
      <div className='flex space-x-6'>
      <Button type="button" onClick={increment}>Increment</Button>
      <Button type="button" onClick={decrement}>Decrement</Button>
    
      </div>
      </div>

     </Card>


    </div>
  )
}

export default Counter