import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product/Product'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const sendRequest = async () => {
            const res = await axios.get('http://localhost:8000/api/products')

            setProducts(res.data)
        }

        sendRequest()
    }, [])

  return (<section>
    <h1>Products</h1>
    <Row>
        {
            products.map((item) => {
                return(
                    <Col key={item._id} sm={12} md={6} lg={4} className='my-3'>
                        <Product product={item}/>
                    </Col>
                )
            })
        }
    </Row>
  </section>
  )
}

export default Home