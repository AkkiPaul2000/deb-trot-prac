import './App.css';
import {React,useState} from 'react'

function App() {
  const [input,setInput]=useState("")
  const [delinput,setDelInput]=useState("")
  const [executing,setExecuting]=useState(true)
  const [trotinput,setTrotInput]=useState("")

   
  let timeoutId;

  const debounce = (func, delay) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
  function trottle(cb,delay=1000){
    shouldWait=false
    return(...args)=>{
      if(shouldWait)return
      cb(...args)
      shouldWait=true
      setTimeout(()=>{
        shouldWait=false
      },delay)
    }
  }
  function handleChange(e){
    setInput(e.target.value)
    debounce(() => {
      // Perform your desired action here, such as fetching data from a server
      console.log("Debounced value:", e.target.value);
      setDelInput(e.target.value)
    }, 3000);
    if(executing)
    {
      setTimeout(() => {
        setTrotInput(e.target.value)
        console.log("yooo")
      }, 1000);
    }

  }
  return (
    <div className="App">
      <input value={input} onChange={handleChange}/>
      <br></br>
      <div>Instant : <h1>{input}</h1></div>
      <div>Debounced: <h2>{delinput}</h2></div>
      <div>Trottled: <h2>{trotinput}</h2></div>
    </div>
  );
}

export default App;
