import React , {useState, useEffect} from "react"
import Clock from "./Clock"
import "./App.css"
function App(){
  const [timer,setTImer]=useState(0)
  const handleTimer=()=>{
    const value = Math.floor(document.getElementById("time").value)
    if(isNaN(value)){
      setTImer(0)

    }else{
      setTImer(value)
    }
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTImer(timer=>timer-1)
    },1000)
    return ()=> clearInterval(interval)
    
  },[])
  useEffect(()=>{
    if(timer<=0){
      clearInterval(setTImer(0))
      return
      
    }
  },[timer])
  return (
    <div className="app">
      <h1 className="heading">CountDown Timer</h1>
      <input type="text" placeholder="enter time in seconds" id="time" onChange={handleTimer}/>
      <Clock timer={timer}/>
    </div>
  )
} 
export default App