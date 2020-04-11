import React from 'react'
//import css from './index.css'
const coord={
  rock: -215,
  paper: -430,
  scissor: 0
}
const rsp=(x)=>{
  return (Object.entries(coord).find(item=>{
    return item[1]==x
  })[0])
}

const App=()=>{
  const id=React.useRef()
  const [imgCoord, setImagcoord]=React.useState(0)
  const [choice, setChoice]=React.useState()
  const changeHand=(sec)=>{
    return (
      setTimeout(()=>{
        if(imgCoord==0){
          setImagcoord(-215)
        }else if(imgCoord==-215){
          setImagcoord(-430)
        }else{
          setImagcoord(0)
        }
      },sec)
    )
  }
  const stopInterval=()=>{
    clearTimeout(id.current)
    changeHand(3000)
  }
  React.useEffect(()=>{
    id.current=changeHand(500)
  },[imgCoord])
  const btnClick=(choice)=>{
    setChoice(choice)
    clearTimeout(id.current)
    setTimeout(()=>{
      setChoice('')
    },3000)
    changeHand(3000)
  }
  return(<>
    <h1>rock, paper, scissor</h1>
    <div id='rps-img' style={{background: `no-repeat url('../public/rps.jpg') ${imgCoord}px 0`}}></div>
    <button onClick={stopInterval}>stop : {rsp(imgCoord)}</button>
    <button>{choice ? choice :'ans'}</button>
    <hr/>
    <button onClick={()=>btnClick('rock')}>rock</button>
    <button onClick={()=>btnClick('paper')}>paper</button>
    <button onClick={()=>btnClick('scissor')}>scissor</button>
  </>)
}
export default App;