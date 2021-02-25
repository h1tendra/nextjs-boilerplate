import Head from 'next/head'

import HomeCarousel from '../components/HomeCarousel'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const title = 'NextJS Boilerplate | Home'

function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <h1>{title}</h1>
        <HomeCarousel />
      </div>
    </Layout>
  )
}

export default Home
