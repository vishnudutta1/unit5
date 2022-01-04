import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App () {

  const [search,setSearch] = useState("subroto")

  const onInputChange = e => {
   setSearch(e.target.value)
  }

  return (
    <div className="App">
     
      <Header></Header>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
