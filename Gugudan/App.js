import React from 'react';

const App=()=>{
  const [first, setFirst]=React.useState(Math.ceil(Math.random()*9))
  const [second, setSecond]=React.useState(Math.ceil(Math.random()*9))
  const [value,setValue]=React.useState('')
  const [result,setResult]=React.useState('')
  const inputRef=React.useRef(null)

  const inputChange=(e)=>{
    setValue(e.target.value)
  }
  const submitData=(e)=>{
    e.preventDefault()
    if(parseInt(value)===first*second){
      setResult('Ans:'+ value)
      setFirst(Math.ceil(Math.random()*9))
      setSecond(Math.ceil(Math.random()*9))
      setValue('')
      inputRef.current.focus()
    }else{
      setResult('Wrong ans')
      setValue('')
      inputRef.current.focus()
    }
  }
  return(
    <>
    <h1>GuGuDan</h1>
    <div>{first} times {second} is what ?</div>
    <form onSubmit={submitData}>
      <input type="number" ref={inputRef} value={value} onChange={inputChange}></input>
      <button>input</button>
    </form>
    <div>{result}</div>
    </>
  )
}

export default App;