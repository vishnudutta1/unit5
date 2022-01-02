import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import { Component } from 'react';
import Hello from './components/Hello';
import IntroJSX from './components/IntroJSX';

class App extends Component {
  render()

  
 {
  
  return (<div>
    <Greet name = "vishnu"></Greet>
    <Greet name = "abhi"></Greet>
    <Greet name = "dheeraj"></Greet>
    <Greet name = "Anand"></Greet>
    <Welcome></Welcome>
    <Hello></Hello>
    <IntroJSX></IntroJSX>
  </div>
  );
}

}


export default App;
