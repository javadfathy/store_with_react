import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card style={{ width: '100%' }}>
        <a href={`/product/${product._id}`}><Card.Img variant="top" src={product.image} /></a>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.discription}
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default Product