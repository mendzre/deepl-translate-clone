import ButtonWithPopover from '../../Popover/ButtonWithPopover.tsx'
import { CleanerIcon } from '../../Icons.tsx'
import useTranslate from '../../../hooks/useTranslate.ts'

function CleaningButton() {
  const { setFromText } = useTranslate()

  function handleClick() {
    setFromText('')
  }

  return (
    <ButtonWithPopover
      id="cleaner"
      text="Delete original text"
      handleClick={handleClick}
    >
      <CleanerIcon />
    </ButtonWithPopover>
  )
}

export default CleaningButton
