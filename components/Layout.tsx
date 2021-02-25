import { Container } from 'react-bootstrap'

import Footer from './footer/Footer'
import Header from './Header'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Layout = ({ children }): JSX.Element => (
  <>
    <Header />
    <Container fluid>{children}</Container>
    <Footer />
  </>
)

export default Layout
