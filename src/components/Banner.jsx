import React from 'react'
import pizzaBanner from '../assets/pizzaBanner.jpg'

function Banner() {
    return (
        <div className='banner'>
            <img  src={pizzaBanner} alt="pizzaBaner" />
            <div className='bannerText'>
                <h1>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    )
}

export default Banner
