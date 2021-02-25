import Layout from '../components/Layout'
import styles from '../styles/Login.module.scss'

function Login(): JSX.Element {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Login</h1>
        <p>Login page content</p>
      </div>
    </Layout>
  )
}

export default Login
