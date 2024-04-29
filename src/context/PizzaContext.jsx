import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({children}) =>{
    const [pizzas, setPizzas] = useState([]);
    const [compras, setCompras] = useState([]);

    const agregarCarrito = (pizzas) =>{
        setCompras([...compras, pizzas])
        alert("Pizza agregada");
    }

    const getPizzas = async () =>{
        try{
            const response = await fetch('/pizzas.json');
            const data = await response.json();
            setPizzas(data)
        }catch(error){
            console.log(error)
        }
    };

    useEffect(() =>{
        getPizzas()
    }, []);

    return(
        <PizzaContext.Provider value={{pizzas, setPizzas, compras, setCompras, agregarCarrito}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;