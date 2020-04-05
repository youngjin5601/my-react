import React from 'react'
//import css from '../src/index.css'

const App=()=>{
  const [prevWord, setPrevWord]=React.useState('Gabie')
  const [word, setWord]=React.useState('')
  const [result, setResult]=React.useState('')
  const inputRef=React.useRef(null)

  const wordInput=(e)=>{
    setWord(e.target.value)
  }
  const wordSubmit=(e)=>{
    e.preventDefault()
    if(prevWord[prevWord.length-1]===word[0]){
      setPrevWord(word)
      setResult('result : OK')
    }else{
      setResult('result : try again')
    }
    setWord('')
    inputRef.current.focus()
  }
  return(
    <>
    <h1>Word Relay</h1>
    <div>{prevWord}</div>
    <form onSubmit={wordSubmit}>
      <label htmlFor="relay-word">insert a word</label>
      <input id="relay-word" ref={inputRef} type="text" value={word} onChange={wordInput}></input>
      <button>Click!!</button>
    </form>
    <div>{result}</div>
    </>
  )
}
export default App;