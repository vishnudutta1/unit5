import React, { Component } from 'react'

class classClick extends Component {

    clicHandler(){
        console.log("clicked the button")
    }

    render() {
        return (
            <div>
                <button onClick={this.clicHandler}>Click Me</button>
            </div>
        )
    }
}

export default classClick;
