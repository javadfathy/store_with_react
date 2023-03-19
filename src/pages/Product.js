import React, { useState, useEffect } from 'react'
import withRouter from '../hoc/withRouter'
import { Row, Col, Button, Image, ListGroup } from 'react-bootstrap'

// import products from '../products'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = ({params}) => {
    const [product, setProduct] = useState({})
    const [colors, setColors] = useState('null')

    useEffect(() => {
        const sendRequest = async () => {
            const res = await axios.get(`http://localhost:8000/api/products/${params.id}`)

            setProduct(res.data)

            setColors(res.data.colors.map((color) => {
                console.log(color)
                return (<div className='color' style={{
                    backgroundColor: color
                    
                }}></div>)
            }))
        }

        sendRequest()
    }, [params])

    // const product = products.find((item) => {
    //     return item._id === +params.id
    // })

    

  return (
    <Row>
        <Col md={12}>
            <Link to='/' className='btn btn-light my-3'>back to home</Link>
        </Col>
        <Col md={6}>
            <Image src={product.image} fluid/>
        </Col>
        <Col md={6}>
            <ListGroup variant='flush' className='mt-5'>
                <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
                <ListGroup.Item>price: <b>{product.price}</b></ListGroup.Item>
                <ListGroup.Item>{product.discription}</ListGroup.Item>
                <ListGroup.Item className='colors'>colors: {colors}</ListGroup.Item>
            </ListGroup>
            <div>
                <Button className='btn-block my-3' type="button">ADD TO CART</Button>
            </div>
        </Col>
    </Row>
  )
}

export default withRouter(Product)