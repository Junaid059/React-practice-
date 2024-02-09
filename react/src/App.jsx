import { useState } from 'react'

import './App.css'



function App(){
let [counter,setCounter] = useState(15);

 const addValue = () =>{
  
  setCounter(counter +1)
 }

 const removeValue = () =>{
  
  setCounter(counter -1)
 }

  return(

    <>
    
    <h1>{counter}</h1>
    <button onClick={addValue}>Add Value : {counter}</button>
    <button onClick={removeValue}>Remove Value : {counter}</button>
    
    
    </>
  )
}

export default App;