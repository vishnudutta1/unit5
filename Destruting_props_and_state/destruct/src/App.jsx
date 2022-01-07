// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Greet from './components/Greet';
 import { Component } from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';

class App extends Component {
  render()

  
 {
  
  return (<div>

   {/* <Greet name = 'Vishnu' heroName = 'Developer'></Greet> */}
   <FunctionClick></FunctionClick>
   <ClassClick></ClassClick>
   <EventBind></EventBind>
   
  </div>
  );
}

}
export default App;
