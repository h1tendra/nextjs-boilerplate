import Head from 'next/head'
import { Container } from 'react-bootstrap'

import Footer from './footer/Footer'
import Header from './Header'

const title = 'NextJS Boilerplate'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Layout = ({ children }): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container fluid>{children}</Container>
    <Footer />
  </>
)

export default Layout
