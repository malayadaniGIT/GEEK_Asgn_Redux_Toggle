import React from 'react'
import '../Main css/Main.css'
import { useSelector } from 'react-redux'

const Service = () => {
    const themeData = useSelector((store) => {
        return store.Theme
    })

    return (
        <div className='MainContainer' id={`${themeData}`}>
            <h1>Our service are not available</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
        </div>
    )
}

export default Service