import React,{Component} from 'react'

import './Message.css'

class Message extends Component {
    constructor(){
      super()
      this.state = {
          message:"Welcome Visitor"
      }
    }

    changeMessage(){
        this.setState({
            message:"thank you for subscribing"
        })
    }

    render()
    {
        return (
        <div className='subs'>
            <h1>{this.state.message}</h1>
            <button onClick={() =>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }


}

export default Message;