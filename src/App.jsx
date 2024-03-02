import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Fotter from './components/Fotter/Fotter'
import About from './components/Aboutfile/About'

function App() {
 let [count,setCount] = useState(0)
 const changeCount =()=>{
  setCount(count+1);
 }
   return (
     <>
      <button onClick={changeCount}>Hazem Amayreh {count}</button>
     </>
  
      
   )
}

export default App
