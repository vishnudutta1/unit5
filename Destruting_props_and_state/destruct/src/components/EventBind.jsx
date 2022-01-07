import React, { Component } from 'react'

class EventBind extends Component {

    hello(){
        console.log("Hello")
    }

    render() {
        return (
            <div>
                <button onClick={hello}>EventBind-button</button>
            </div>
        )
    }
}

export default EventBind
