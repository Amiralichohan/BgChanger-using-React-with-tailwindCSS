import { useState } from 'react'

import './App.css'

function App() {
 const[color , setcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    
    style={{backgroundColor:color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-lg'>
      <button
      onClick={()=>setcolor('red')}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'Red'}}>
        Red</button>
        <button
      onClick={()=>setcolor('green')}

       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'Green'}}>
        Green</button>
        <button
      onClick={()=>setcolor('blue')}

       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'Blue'}}>
        Blue</button>
        <button
      onClick={()=>setcolor('black')}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'Black'}}>
        Black</button>
        <button
      onClick={()=>setcolor('Orange')}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'orange'}}>
        Orange</button>
        <button
      onClick={()=>setcolor('Violet')}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor:'violet'}}>
        Violet</button>
      </div>
     </div>
  </div>

  )
}

export default App
