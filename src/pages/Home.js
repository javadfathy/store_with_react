import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product/Product'

const Home = () => {
  return (<section>
    <h1>Products</h1>
    <Row>
        {
            products.map((item) => {
                return(
                    <Col sm={12} md={6} lg={4} className='my-3'>
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