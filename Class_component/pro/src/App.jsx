import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/welcome';
import { Component } from 'react';
// import Hello from './components/Hello';
// import IntroJSX from './components/IntroJSX';


function App() {
  
  return (<div>
    <Greet name = "vishnu">
    <p>We are Best</p>
    </Greet>
    <Greet name = "dutta">
    <p>We are Best</p>
    </Greet>
  </div>
  );
}




export default App;
