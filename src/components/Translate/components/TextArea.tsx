import { type ReactNode, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { MAXIMUM_TEXT_LENGTH } from '../../../typings/constants'

interface Props {
  id: string
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  ariaLabel: string
  autoFocus?: boolean
  children: ReactNode
}

function TextArea({
  id,
  value,
  onChange,
  placeholder,
  ariaLabel,
  autoFocus,
  children
}: Props) {
  const [style, setStyle] = useState({})

  function fitFontSizeByCharacters() {
    const baseFontSize = 1.5
    let fontSize = baseFontSize

    if (value.length > 51) {
      fontSize -= 0.15
    }

    if (value.length > 165) {
      fontSize -= 0.15
    }

    setStyle({ fontSize: `${fontSize}rem` })
  }

  useEffect(() => {
    fitFontSizeByCharacters()
  }, [value])

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (onChange === undefined) return
    onChange(event.target.value)
  }

  return (
    <>
      <Form.Control
        as="textarea"
        id={id}
        className="px-md-4 py-md-3"
        style={style}
        onChange={handleTextChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoFocus={autoFocus}
        value={value}
        maxLength={MAXIMUM_TEXT_LENGTH}
      />
      {children}
    </>
  )
}

export default TextArea
