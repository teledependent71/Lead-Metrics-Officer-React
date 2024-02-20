import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Metrics Officer</title>
        <meta property="og:title" content="Lead Metrics Officer" />
      </Helmet>
    </div>
  )
}

export default Home
