import { Container } from 'react-bootstrap'
import HeaderLogo from './HeaderLogo.tsx'

function Header() {
  return (
    <header className="bg-white shadow">
      <Container fluid className="container-lg">
        <HeaderLogo />
      </Container>
    </header>
  )
}

export default Header
