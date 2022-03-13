import React, { useEffect, useState } from 'react'

const listStock = [
  {id:1, title:"Pelota Adidas", type:"insumo", deporte:"futbol", stock:5},
  {id:2, title:"Pelota Nike", type:"insumo", deporte:"futbol", stock:4},
  {id:3, title:"Pelota Reebok", type:"insumo", deporte:"futbol", stock:8}]

  console.log(listStock[0].stock)

function HandleCountToBuy () {

const [count, setCount] = useState(1)

useEffect(() => {

    console.log(count)
    if(count < 1){
      alert('La cantindad a comprar no puede ser menor a 1 unidad')
      const setCarrito = () => {setCount(1)}
      setCarrito()
    }else if(count > listStock[0].stock){
      alert(`No contamos con más stock. Unidades disponibles: ${listStock[0].stock}`)
      const setCarrito = () => {setCount(listStock[0].stock)}
      setCarrito()
    }})  
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>AGREGAR</button>
        <br/>
        <label>
          Cantidad de productos: 
          <br/>
          {count}
        </label>
        <br/>
        <button onClick={() => setCount(count - 1)}>QUITAR</button>
    </div>
  )
  }

export default HandleCountToBuy
