import React from 'react'
import BetTypeSelector from '../components/BetTypeSelector'
import GameList from '../components/GameList'
import Layout from '../components/Layout'
import DevComponent from '../components/DevComponent'

const Home: React.FC = () => {
  return (
    <Layout>
      {process.env.NODE_ENV === 'development' && <DevComponent />}
      <BetTypeSelector />
      <GameList />
    </Layout>
  )
}

export default Home
