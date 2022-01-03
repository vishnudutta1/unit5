import React from 'react'
import './Header.css'
const Header = () =>{
    return(
    <div className='jumbo'>
         <h1 className='display1'>Food Tracking App</h1>
         <div className="inpu">
        <div><input type="text" placeholder='Search Dishes'/></div>
 <div><button>Search</button></div>
</div>
    </div>
    )
}


export default Header;