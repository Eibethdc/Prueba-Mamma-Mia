import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PizzaContext } from '../context/PizzaContext'
import { Link } from 'react-router-dom';

function CardPizza() {
    const {pizzas, agregarCarrito} = useContext(PizzaContext);
    
    return (
        <div className='m-5 d-flex flex-wrap gap-4 justify-content-center'>
        {pizzas.map((pizza) => (
            <Card key={pizza.id} style={{ width: '18rem' }} >
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
                <Card.Title className='border-bottom pb-3'>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</Card.Title>
                <div className='border-bottom'>
                    <h6>Ingredientes:</h6>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index} style={{listStyle: 'none'}}>🍕{ingredient[0].toUpperCase() + ingredient.slice(1)}</li>
                        ))}
                    </ul>
                </div>
                <h5 className='text-center p-3'>${pizza.price}</h5>
                <div className='d-flex gap-3 justify-content-center'>
                    <Link to={`/pizza/${pizza.id}`}>
                        <Button variant="info">Ver mas 👀</Button>
                    </Link>
                    <Button variant="danger" onClick={() => agregarCarrito(pizza)}>Añadir 🛒</Button>
                </div>
            </Card.Body>
            </Card>
        ))}
        </div>
    )
}

export default CardPizza
