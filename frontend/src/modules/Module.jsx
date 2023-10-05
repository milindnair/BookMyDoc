import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/footer';
import Routers from '../routes/Routers';

const Module = () => {
  return (
    <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
  )
}

export default Module