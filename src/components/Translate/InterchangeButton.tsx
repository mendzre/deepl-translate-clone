import { Button } from 'react-bootstrap'
import { ArrowIcon } from '../Icons.tsx'
import { AUTO_LANGUAGE } from '../../typings/constants.ts'
import useTranslate from '../../hooks/useTranslate.ts'

function InterchangeButton() {
  const { fromLanguage, interchangeLanguages } = useTranslate()

  return (
    <Button
      variant="link"
      type="button"
      disabled={fromLanguage === AUTO_LANGUAGE}
      onClick={interchangeLanguages}
      aria-label="Interchange languages button"
    >
      <ArrowIcon />
    </Button>
  )
}

export default InterchangeButton
