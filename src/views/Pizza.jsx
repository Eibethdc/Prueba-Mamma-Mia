import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

function Pizza() {
    const {pizzas, agregarCarrito} = useContext(PizzaContext);
    const { id } = useParams()
    const navigate = useNavigate();

    const irAlCarrito = () =>{
        navigate(`/carrito`)
    }

    const pizzaId = pizzas.filter((ele) => ele.id === id);

    return (
        <div className='w-80 m-auto p-5'>
            {pizzaId.map((pizza) =>(
                <Card key={pizza.id} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img style={{height: '100%'}} src={pizza.img} />
                        </div>
                        <Card.Body className='col-md-8'>
                            <Card.Title className='border-bottom pb-3'>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</Card.Title>
                            <Card.Text>
                                {pizza.desc}
                            </Card.Text>
                            <div>
                                <h6>Ingredientes:</h6>
                                <ul>
                                    {pizza.ingredients.map((ingredient, index) => (
                                        <li key={index} style={{listStyle: 'none'}}>🍕{ingredient[0].toUpperCase() + ingredient.slice(1)}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h4 className='p-3'>Precio: ${pizza.price}</h4>
                                <Button variant="danger" onClick={() => {irAlCarrito(); agregarCarrito(pizza);}}>Añadir 🛒</Button>
                            </div>
                        </Card.Body>
                    </div>               
                </Card>
            ))}
        </div>
    )
}

export default Pizza
