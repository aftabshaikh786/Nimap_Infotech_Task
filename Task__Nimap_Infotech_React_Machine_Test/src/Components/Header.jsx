import { Link } from 'react-router-dom';
import '../Css_Styles/Header.css'
import React, { useEffect, useState } from 'react' ; 

const Header = ({onSearchClick}) => {
    const [searchText , setSearchText] = useState("");
    return (
        <div className="nav-div">
            <h3 className='logo-div'>MovieHub</h3>
            <div className='search-bar-div'>
                <input id="search-bar" type='text' placeholder='Enter the Movie Name' value = {searchText} onChange = {(event)=>setSearchText(event.target.value )}></input>
                <button id="btn" onClick={()=> onSearchClick(searchText)}>Search</button>
            </div>
            <div className='menu-div'>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
                <Link to = "/Top-Rated" style={{ color: "black", textDecoration: "none" }}>Top-Rated</Link>
                <Link to = "/Upcoming Movies" style={{ color: "black", textDecoration: "none" }}>Upcoming</Link>
                <Link to = "/Searched Movie" style={{color: "black" , textDecoration:"none"}}>Searched Movie</Link>
                
                
                {/* <Link to="/top-rated">Top-Rated</Link>
                <Link to="/upcoming">Upcoming Movies</Link> */}
            </div>
        </div>
    );
};

export default Header;