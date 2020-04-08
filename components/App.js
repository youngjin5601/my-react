import React from 'react'
//import css from '../src/index.css'

const getNumbers=()=>{
  console.log('hello')
  const candidates=[1,2,3,4,5,6,7,8,9]
  const chosens=[]
  for(let i=0;i<4;i++) chosens.push(candidates.splice(Math.floor(Math.random()*candidates.length),1)[0]);
  return chosens
}
const App=()=>{
  const [answer, setAnswer]=React.useState()
  console.log(answer)
  
  const [result,setResult]=React.useState('')
  const [tryList, setTryList]=React.useState([])
  const inputRef=React.useRef(null)

  React.useEffect(()=>{
    setAnswer(getNumbers())
  },[])
  const submitForm=(e)=>{
    e.preventDefault()
    if(inputRef.current.value===answer.join('')){
      setTryList([...tryList, {ans: inputRef.current.value, strike: 4, ball: 0}])
      inputRef.current.value=''
      //inputRef.current.focus()
      setResult('home run!!!')
      setTimeout(()=>{
        setAnswer(getNumbers)
        setResult('')
        setTryList([])
      },2000)
    }else{
      console.log(tryList.length)
      if(tryList.length>=4){
        setResult('try again!!!')
        setTimeout(()=>{
          setAnswer(getNumbers)
          setResult('')
          setTryList([])
        },2000)
      }
      //
      let strike=0;
      let ball=0;
      for(let i=0;i<answer.length;i++){
        if(inputRef.current.value[i]==answer[i]){
          strike++;
        }else{
          if(answer.includes(parseInt(inputRef.current.value[i]))) ball++
        }
      }
      setTryList([...tryList, {ans: inputRef.current.value, strike: strike, ball: ball}])
      inputRef.current.value=''
      //inputRef.current.focus()
    }
  }
  return(<>
    <h1>NumberBaseball</h1>
    <h2>{result}</h2>
    <form onSubmit={submitForm}>
      <input ref={inputRef} type="text" maxLength="4" ></input>
      <button type="submit">click!!</button>
    </form>
    <ul>
      {
        tryList.map((item,idx)=>{
        return <li key={idx}>ans:{item.ans}- strike:{item.strike}- ball:{item.ball}</li>
        })
      }
    </ul>
  </>)
}
export default App;