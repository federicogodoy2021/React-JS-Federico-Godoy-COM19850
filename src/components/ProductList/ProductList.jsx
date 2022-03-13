import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import HandleCountToBuy from '../HandleCount/HandleCountToBuy'
import adidas from "../../imgs/adidas.jpg"
import nike from "../../imgs/nike.jpg"
import reebok from "../../imgs/reebok.jpg"

function ProductList() {
  return (
    <div >
        <CardGroup >
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={adidas}/>
            <Card.Body>
            <Card.Title>Pelota Adidas</Card.Title>
            <Card.Text>
                Pelota Adidas N°5 de cuero sintetico
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <HandleCountToBuy/>
            </Card.Footer>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={nike}/>
            <Card.Body>
            <Card.Title>Pelota Nike</Card.Title>
            <Card.Text>
                Pelota Nike N°5 de cuero sintetico
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <HandleCountToBuy/>
            </Card.Footer>
        </Card>
        <Card style={{backgroundColor: 'darkgray'}}>
            <Card.Img variant="top" src={reebok}/>
            <Card.Body>
            <Card.Title>Pelota Reebok</Card.Title>
            <Card.Text>
                Pelota Reebok N°5 de cuero sintetico
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <HandleCountToBuy/>                
            </Card.Footer>
        </Card>
        </CardGroup>

    </div>
  )
}

export default ProductList