import React from 'react'
import './Header.css'
const Header = (props) =>{

    const {search,onInputChange} = props;

    return(
    <div className='jumbo'>
         <h1 className='display1'>Food Tracking App</h1>
         <div className="inpu">
        <div>
            <input type="text" placeholder='Search Dishes'
            value={search}
            onChange={onInputChange}/>
        </div>
   <div>
       <button>Search</button>
    </div>
</div>
    </div>
    )
}


export default Header;