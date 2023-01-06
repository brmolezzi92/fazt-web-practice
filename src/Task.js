import React from 'react'
import "./task.css"

const cardStyles = {background:"blue",color:"white", padding:"20px"}

const TaskCard = ({ready}) => {
  return (
    <div style={cardStyles}>
      <h1 style={{fontweight:"700"}}>Mi primer tarea</h1>
      
      <span className={ready?"bg-red":"bg-green"}
        
      >
        {
            ready ? "Tarea realizada" : "Tarea pendiente"
        }
      </span>
    </div>
  )
}

export default TaskCard
