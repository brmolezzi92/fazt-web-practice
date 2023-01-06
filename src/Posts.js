import React from 'react'
import { VscBug,VscFlame } from "react-icons/vsc";
//Trayendo datos de una api jsonplaceholder
const Posts = () => {
  return (
    
    <button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data =>console.log(data))
            .catch(error=>console.error(error))
    }}>
        <VscFlame/>
        Traer datos
        <VscBug/>
    </button>
  )
}

export default Posts
