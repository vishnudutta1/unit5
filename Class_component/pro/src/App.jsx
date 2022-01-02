import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/welcome';
import { Component } from 'react';
// import Hello from './components/Hello';
// import IntroJSX from './components/IntroJSX';

class App extends Component {
  render()

  
 {
  
  return (<div>
    <Greet name = "vishnu">
    <p>We are Best</p>
    </Greet>
    <Greet name = "abhi">
      <button>submit</button>
    </Greet>
    <Greet name = "dheeraj">
    <p>we will secure a high package job</p>
    </Greet>
    
    <Greet name = "Anand">
     <button>Accepted</button>
    </Greet>
   
  </div>
  );
}

}


export default App;
