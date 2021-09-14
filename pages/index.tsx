import React, { useContext } from 'react'

import { GlobalContext } from './_app'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.sass'

const Home = () => {

  const { count } = useContext(GlobalContext)

  return (
    <Layout>
      <div className={styles.container} >
        {count}
      </div>
    </Layout>
  )
}

export default Home
