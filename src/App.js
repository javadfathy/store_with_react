import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/product/:id' element={<Product />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App