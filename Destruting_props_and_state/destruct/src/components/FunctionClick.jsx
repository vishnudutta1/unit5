import React from 'react'
import './FunctionClick.css'

function FunctionClick() {

    
   function clickHandler(){
        console.log('button')
    }


    return (
        <div className='but'>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
