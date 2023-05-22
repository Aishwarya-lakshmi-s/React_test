import React from 'react'
import Header from '../components/Header'
import HomeCard from '../components/HomeCard'
import Main from '../components/Main'
import PopularItems from '../components/Popular_items'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCard />
      <Main />
      <PopularItems />
      <Footer />
    </div>
  )
}

export default Home
