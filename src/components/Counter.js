import axios from 'axios';
import React,{useSelector,useDispatch} from 'react-redux'
import Card from '../UI/Card'

function Counter(props) {
 const dispatch = useDispatch();
 
 async function addCount(){
    const response = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=43b1dd3a353c4a0f88ed493c78f470be&location=Rampur`);
    dispatch({type:"DATA",payload:response.data})
  }
  setInterval(() => {
   addCount();
  }, 900);
    
  const userDetails = useSelector((state) => state.setData)
 

  

  return (
    <div>
     <Card>
      <div className='text-center mt-3 text-4xl font-semibold text-violet-600 uppercase'>
        Live Time
      </div>
      <div className='text-center text-red-600 text-6xl mt-6'>
      {userDetails.details.datetime}
        </div>
      
        <div className='text-center text-violet-600 text-2xl mt-6'>
      {userDetails.details.requested_location}
        </div>
      
      <div className='grid place-content-center mt-8'>

      <div className='flex space-x-6'>
  
    
      </div>
      </div>

     </Card>


    </div>
  )
}

export default Counter