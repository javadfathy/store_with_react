import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App