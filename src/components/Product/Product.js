import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card style={{ width: '100%' }}>
        <Link to={`/product/${product._id}`}><Card.Img variant="top" src={product.image} /></Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}><Card.Title>{product.name}</Card.Title></Link>
            <Card.Text>
                {product.discription}
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default Product