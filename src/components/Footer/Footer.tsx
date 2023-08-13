import { Container } from 'react-bootstrap'
import FooterLink from './FooterLink.tsx'

function Footer() {
  return (
    <footer className="bg-white py-4 shadow">
      <Container fluid className="w-prose">
        <small>
          This site is a clone of{' '}
          <FooterLink
            text="DeepL Translate"
            href="https://www.deepl.com/translator"
          />{' '}
          for educational purposes. Based on the original concept of text
          translation. Made with React, Bootstrap and ChatGPT API. Check out the{' '}
          <FooterLink
            text="source code"
            href="https://github.com/emmamr05/deepl-translate-clone"
          />{' '}
          on Github.
        </small>
      </Container>
    </footer>
  )
}

export default Footer
