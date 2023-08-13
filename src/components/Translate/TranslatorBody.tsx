import { Col, Row } from 'react-bootstrap'
import TextAreaFrom from './TextAreaFrom.tsx'
import TextAreaTo from './TextAreaTo.tsx'

function TranslatorBody() {
  return (
    <Row className="flex-column flex-md-row">
      <Col className="position-relative pe-md-0">
        <TextAreaFrom />
      </Col>

      <Col className="position-relative ps-md-0">
        <TextAreaTo />
      </Col>
    </Row>
  )
}

export default TranslatorBody
