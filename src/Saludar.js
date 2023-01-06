import { Component } from "react"

export class Saludar extends Component {
    render(){
        return  <div>
                    <h1>Hola mundo</h1>
                    <button onClick={()=>{console.log("hola mundo")}}>click</button>
                </div>

    }
}
