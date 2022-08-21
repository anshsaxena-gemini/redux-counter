const setData = (state={
   
    details:""},action) =>{
   if(action.type === 'DATA'){
     return {
       details: action.payload,
     };
    }
   
   return state;
 }

 export default setData