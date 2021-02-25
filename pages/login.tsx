import Head from 'next/head'

import Layout from '../components/Layout'
import styles from '../styles/Login.module.scss'

const title = 'Login'

function Login(): JSX.Element {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        <p>Login page content</p>
      </div>
    </Layout>
  )
}

export default Login
