import React from "react";
import './Todo.css'

const Todo = (props) => {
  console.log(props)
    
   return (
        <div>
          <h1>{props.name}</h1>
          <li>{props.type1}</li>
          <li>{props.type2}</li>
          <li>{props.type3}</li>
          <li>{props.type4}</li>
        </div>
   )
}

export default Todo;


// import React from "react";
// import './Greet.css'

// const Greet = (props) => {
//     console.log(props)
//     return <h1>Hello {props.name}</h1>
// }

// export default Greet;
