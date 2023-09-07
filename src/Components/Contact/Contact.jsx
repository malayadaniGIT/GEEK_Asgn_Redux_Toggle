import React from 'react'
import '../Main css/Main.css'
import { useSelector } from 'react-redux'

const Contact = () => {
    const themeData = useSelector((store) => {
        return store.Theme
    })
    return (
        <div className="MainContainer" id={`${themeData}`} >
            <h1>You can mail me help@geekster.in</h1>
        </div>
    )
}

export default Contact