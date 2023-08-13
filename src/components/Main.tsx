import { Container } from 'react-bootstrap'
import Translator from './Translate/Translator'
import { TranslateProvider } from '../context/translate'

function Main() {
  return (
    <Container as="main" fluid className="flex-grow-1 container-lg">
      <TranslateProvider>
        <Translator />
      </TranslateProvider>
    </Container>
  )
}

export default Main
