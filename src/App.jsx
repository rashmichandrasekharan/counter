
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement,reset, rangeChange } from './redux/CounterSlice'
import { useState } from 'react'
function App() {

  const [range,setRange]=useState("")

  const count=useSelector((state)=>state.counterReducer.value)
  // console.log(count);





  const dispatch=useDispatch()

const handleRange=()=>{
  if(!range){
    alert('please enter range')
  }
  else{
    dispatch(rangeChange(Number(range)))
  }
}

console.log(range);
  return (
    <>
     <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex align-items-center justify-content-center'>
      <div style={{backgroundColor:'white', width:'500px'}} className='p-5 rounded'>
      <h1 className='text-primary' >Counter Application</h1>
      <h1 className='text-center my-5' style={{fontSize:'50px'}}>{count}</h1>
        <div className='mt-3 d-flex justify-content-evenly'>
          <button type='button' className='btn btn-warning' onClick={()=>dispatch(increment())}>Increment</button>
          <button type='button' className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
          <button type='button' className='btn btn-success' onClick={()=>dispatch(decrement())}>Decrement</button>
</div>
<div className='d-flex mt-5'>
  <input type="text" placeholder='Enter range' className='form-control' onChange={(e)=>setRange(e.target.value)} />
  <button className='btn btn-info ms-2' onClick={handleRange} >Click</button>
</div>
     </div>
     </div>
    </>
  )
}

export default App
