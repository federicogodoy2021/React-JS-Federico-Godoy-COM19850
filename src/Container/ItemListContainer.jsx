import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import adidas from "../imgs/adidas.jpg"
import nike from "../imgs/nike.jpg"
import reebok from "../imgs/reebok.jpg"
import ItemCount from '../components/ItemCount/ItemCount'
import stock from '../components/Items/stock'
import BuyButton from '../components/BuyButton/BuyButton'
import ItemList from '../components/ItemList/ItemList'

function ItemListContainer() {

return (
    <div >
        <CardGroup >
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={adidas}/>
            <Card.Body>
                <ItemList titulo = {stock[0].title} reseña = {stock[0].description} costo = {stock[0].price} />
            </Card.Body>
            <Card.Footer>
                <ItemCount stock={stock[0].stock} initial={1}/>
                <br/>
                <BuyButton/>          
            </Card.Footer>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={nike}/>
            <Card.Body>
                <ItemList titulo = {stock[1].title} reseña = {stock[1].description} costo = {stock[1].price} />
            </Card.Body>
            <Card.Footer>
                <ItemCount stock={stock[1].stock} initial={1}/>
                <br/>
                <BuyButton/>          
            </Card.Footer>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={reebok}/>
            <Card.Body>
                <ItemList titulo = {stock[2].title} reseña = {stock[2].description} costo = {stock[2].price} />
            </Card.Body>
            <Card.Footer>
                <ItemCount stock={stock[2].stock} initial={1}/>
                <br/>
                <BuyButton/>          
            </Card.Footer>
        </Card>
        </CardGroup>

    </div>
  )
}

export default ItemListContainer