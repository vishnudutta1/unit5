import React, { Component } from 'react'



class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            Count: 0
        }
    }


    increment(){
        this.setState(
            {Count:this.state.Count+1})
    }

    reset(){
        this.setState(
            {
                Count:0
            }
        )
    }

    decrement(){
        this.setState(
            {
                Count:this.state.Count-1
            }
        )
    }





    render() {
        return (
            <div>
              <h1>Count - {this.state.Count}</h1>
              <h1><button onClick={() => this.increment()}>Increment</button></h1>
              <button onClick={()=>this.reset()}>Reset</button>
              <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
