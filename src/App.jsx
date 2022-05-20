import React from 'react'

import Info from './components/Header/info'
import About from './components/MainContent/about'
import Interests from './components/MainContent/interests'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </>
  )
}

export default App
