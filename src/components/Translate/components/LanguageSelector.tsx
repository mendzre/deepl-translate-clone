import type { ChangeEvent, ReactNode } from 'react'
import { Form } from 'react-bootstrap'
import type { FromLanguage, Language } from '../../../typings/types'

interface Props {
  value: Language | FromLanguage
  onChange: (language: Language) => void
  children: ReactNode
}

function LanguageSelector({ value, onChange, children }: Props) {
  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select
      className="fw-medium border-0"
      aria-label="Selecting the language"
      onChange={handleLanguageChange}
      value={value.toString()}
    >
      {children}
    </Form.Select>
  )
}

export default LanguageSelector
