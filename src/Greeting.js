import React from 'react'

const Greeting = ({title,name="user"}) => {
    console.log(title)

    return <>
        <h1>{title}{name}</h1>
    </>
}

export default Greeting


