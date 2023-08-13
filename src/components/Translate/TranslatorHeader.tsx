import { Col, Row } from 'react-bootstrap'
import InterchangeButton from './InterchangeButton.tsx'
import SelectorFrom from './SelectorFrom.tsx'
import SelectorTo from './SelectorTo.tsx'

function TranslatorHeader() {
  return (
    <Row
      as="header"
      className="justify-content-between align-items-center flex-nowrap px-md-3 py-md-2 border-bottom"
    >
      <Col className="flex-grow-1">
        <SelectorFrom />
      </Col>

      <Col className="flex-grow-0">
        <Row>
          <InterchangeButton />
        </Row>
      </Col>

      <Col className="flex-grow-1">
        <SelectorTo />
      </Col>
    </Row>
  )
}

export default TranslatorHeader
