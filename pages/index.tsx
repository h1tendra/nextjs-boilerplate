import HomeCarousel from '../components/HomeCarousel'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>NextJS Boilerplate</h1>
        <HomeCarousel />
      </div>
    </Layout>
  )
}

export default Home
