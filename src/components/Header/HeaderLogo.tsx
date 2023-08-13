import { Nav } from 'react-bootstrap'

function HeaderLogo() {
  return (
    <Nav.Link className="brand-link" href="/">
      <img src="/logo.svg" alt="DeepL Logo" />
      <strong>DeepL Translate Clone</strong>
    </Nav.Link>
  )
}

export default HeaderLogo
