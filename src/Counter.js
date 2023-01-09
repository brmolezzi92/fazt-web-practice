import React,{useState,useEffect} from 'react'

const Counter = () => {
    const [ counter, setCounter] = useState(1)
    const [counterDos, setCounterDos] = useState(0);

    useEffect(() => {
      console.log("render")
    }, [counterDos])
    

  return (
    <div>
        <button onClick={()=> setCounter(counter<=1?counter:counter-1)}>Restar</button>
        <h1>count: {counter}</h1>
        <button onClick={()=> {setCounter(counter+1)}}>Sumar</button>

        <hr/>

        <h1>counter :{counterDos}</h1>
        <button onClick={()=>setCounterDos(counterDos+1)}>incrementar</button>
    </div>
  )
}

export default Counter
