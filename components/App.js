import React from 'react'
import css from './index.css'

const App=()=>{
  const [color, setColor]=React.useState('red')
  const [message, setMessage]=React.useState('click to start')
  const [lag, setLag]=React.useState([])
  const id=React.useRef()
  const start=React.useRef()
  
  console.log(start)
  const clickScreen=()=>{
    switch(color){
      case 'red':
        id.current=setTimeout(() => {
          setColor('blue')
          setMessage('click now')
          start.current=new Date()
        }, 2000+Math.floor(Math.random()*1000));

        setColor('green')
        setMessage('wait for blue')
        break;
      case 'green':
        setColor('red')
        setMessage('you are in a hurry..')
        clearTimeout(id.current)
        break;
      case 'blue':
        setLag(lag=>[...lag, new Date()-start.current])
        setColor('red')
        setMessage('click to start')
        break;
    }
  }
  return(<>
    <h1>response check</h1>
    <div id="screen" className={color} onClick={clickScreen}>
      {message}
    </div>
    Records  {lag.length !==0 && lag.reduce((a,b)=>a+b)/lag.length} ms
      <ul>
        {lag.map((item,idx)=><li key={idx}>{item} ms</li>)}
      </ul>
  </>)
}
export default App;