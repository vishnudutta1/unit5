// import logo from './logo.svg';
import React, { Component } from 'react';
import './components/Todo'
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  render(){
  return (
  <div>
      <Todo name = "Mobile OPerating System" type1 = "Android" type2= "Blackberry" type3="windows phone" type4 = "iphone"></Todo>
      <Todo name = "Mobile Manufacturers" type1 = "Samsung" type2= "htc" type3="micromax" type4="Apple"></Todo>
  </div>
  );
}
}
export default App;
