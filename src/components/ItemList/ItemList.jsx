import React, { useEffect, useState } from 'react'
import getItems from '../Items/Items'
import stock from '../Items/stock'

function ItemList(propiedad) {
  

  const [products, setProducts] = useState([])
  
  useEffect(() =>{
    getItems
    .then((res) => {setProducts(stock)})
    .catch((err) => {console.error(`Error: ${err}`)})
  .finally(() => {console.log("Finalizado")})
  },[])

  let nombre = propiedad.titulo
  let precio = propiedad.costo
  let descripcion = propiedad.reseña

  return (
    
    <>
      {products.map(() =>{

        return(
          
          <div >
            <h1>{nombre}</h1>
            {console.log(nombre)}
            <h2>{descripcion}</h2>
            <h3>{precio}</h3>
          </div>

      )})} 
      </>  

)}


export default ItemList