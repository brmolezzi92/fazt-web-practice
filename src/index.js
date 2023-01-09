import React from "react"
import ReactDOM from "react-dom/client"
import Counter from "./Counter";
import InputUseState from "./InputUseState";

// import Greeting from "./Greeting";
// import TaskCard from "./Task";
// import { Saludar } from "./Saludar";
//import Posts from "./Posts";
// const root = document.getElementById("root");

// const user = [
//     {
//         id:1,
//         name: "Bruno",
//         img: "https://robohash.org/user1",
//     },

//     {
//         id:2,
//         name: "Juan",
//         img: "https://robohash.org/user2",
//     },

//     {
//         id:3,
//         name: "Pedro",
//         img: "https://robohash.org/user3",
//     },

//     {
//         id:4,
//         name: "Marcos",
//         img: "https://robohash.org/user4",
//     }
// ]



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <>

        {/* <TaskCard ready={true}/>
        <Saludar/>

        {/* <input onChange={(e)=>{
            console.log(e.target.value)
        }}/> */}

        {/* <form onSubmit={(e)=>{
            e.preventDefault()
            
        }}>
            <h1>Registro de usuario</h1>
            <button>Send</button>

        </form> */ }

        {/* <Posts/> */}

        {/* {user.map((user) => {

            return  <div key={user.id}>
                        <h1>{user.name}</h1>
                        <img src={user.img} alt=""/>
                    </div>

        })} */}


        <Counter/>
        <InputUseState/>


    </>

);
