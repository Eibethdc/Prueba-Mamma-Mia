import React, { useContext, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { PizzaContext } from '../context/PizzaContext'

function Carrito() {
    const { compras } = useContext(PizzaContext);
    const [total, setTotal] = useState(0);

    const calcularTotal = () => {
        let totalCompra = 0;
        for (const compra of compras) {
            totalCompra += compra.price;
        }
        return totalCompra;
    }

    useEffect(() => {
        setTotal(calcularTotal());
    }, [compras]);

    return (
        <div className='m-5'>
            <div className='w-75 border m-auto p-3'>
                <h3>Detalles del pedido:</h3>
                {compras.map((compra) =>(
                    <div className='d-flex border-bottom p-2' key={compra.id}>
                        <img style={{width: '100px'}} src={compra.img} alt="" />
                        <div className='d-flex align-items-center w-100 justify-content-between p-2'>
                            <h6>{compra.name[0].toUpperCase() + compra.name.slice(1)}</h6>
                            <div >
                            <span>${compra.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <h1>Total: ${total}</h1>
                <Button>Ir a pagar</Button>
            </div>
        </div>
    )
}

export default Carrito;
