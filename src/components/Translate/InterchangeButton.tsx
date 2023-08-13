import { ArrowIcon } from '../Icons.tsx'
import { AUTO_LANGUAGE } from '../../typings/constants.ts'
import useTranslate from '../../hooks/useTranslate.ts'
import ButtonWithPopover from '../Popover/ButtonWithPopover.tsx'

function InterchangeButton() {
  const { fromLanguage, interchangeLanguages } = useTranslate()

  return (
    <ButtonWithPopover
      text="Reverse the source language and the target language"
      variant="link"
      handleClick={interchangeLanguages}
      disabled={fromLanguage === AUTO_LANGUAGE}
    >
      <ArrowIcon />
    </ButtonWithPopover>
  )
}

export default InterchangeButton
