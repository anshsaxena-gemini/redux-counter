import axios from 'axios';

export const getTime =(city)=>{
    return async function (dispatch){
        try{
        const response = await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=43b1dd3a353c4a0f88ed493c78f470be&location=${city}`);
        dispatch({type:"DATA",payload:response.data})
        }
        catch(err){
            console.log("No data found");
        }
      }
}