import React, { useState } from 'react'

import { Header, Main, Footer, Cards } from 'components'

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Main />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
