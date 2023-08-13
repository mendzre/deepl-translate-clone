import { Nav } from 'react-bootstrap'

interface Props {
  text: string
  href: string
}

function FooterLink({ text, href }: Props) {
  return (
    <Nav.Link
      className="d-inline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Nav.Link>
  )
}

export default FooterLink
