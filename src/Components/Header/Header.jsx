import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '../Redux Toolkit/ThemeSlices'
import { useState } from 'react'

const Header = () => {
    const[state,setstate]=useState("Welcome to Geekster")
    
    const data=useSelector((storeData) => {
        return storeData;
      });
    const buttonLight = { backgroundColor: "white", color: "black" }
    const buttonDark = { backgroundColor: "#0f172a", color: "white" }

    const themeData = useSelector((store) => {
        return store.Theme
    })
    console.log(themeData);

    const dispatch = useDispatch()

    const handleToggleTheme = () => {
        dispatch(setTheme());
        setstate(themeData === "light" ? "I have Changed To Dark" : "I have Changed To Light");
    };

    return (
        <div>
            <div className="headerUpper">
{
    
      <p>{state}<span></span></p>
    
}
            </div>

            <div id={`${themeData}`}>

                <div>
                    {/* <img src={image} alt="Img" /> */}
                    <h2>Geekster</h2>
                </div>

                <div > 
                    <ul>
                        <Link to="/Home">
                            <li>Home</li>
                        </Link>
                        <Link to="/Contact">
                            <li>Contact</li>
                        </Link>
                        <Link to="/Service">
                            <li>Service</li>
                        </Link>
                    </ul>

                </div>

                <div>
                    <button onClick={handleToggleTheme}
                        style={themeData === "light" ? buttonDark : buttonLight}>
                        {themeData === "light" ? "toggle theme to Dark" : "toggle theme to Light"}
                    </button>


                </div>
            </div>

        </div>

    )
}

export default Header