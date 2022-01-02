import React from "react";
import './Greet.css'

const Greet = (props) => {
    console.log(props)
    return <div className="Maindiv">
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>
}

export default Greet;
