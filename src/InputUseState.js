import React, { useState } from 'react'

const InputUseState = () => {
    const [mensaje, setMensaje] = useState("")

  
    return (
    <div>
        
        <input onChange={e=>setMensaje(e.target.value)}/>
        {console.log(mensaje)}
        <button onClick={()=>{
            alert("el mensaje es "+mensaje)
            console.log(mensaje)
        }}>Save</button>

    </div>
  )
}

export default InputUseState
