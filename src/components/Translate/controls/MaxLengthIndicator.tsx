import useTranslate from '../../../hooks/useTranslate'
import { MAXIMUM_TEXT_LENGTH } from '../../../typings/constants'

function MaxLengthIndicator() {
  const { fromText } = useTranslate()

  return (
    <span id="max-length-indicator">
      {fromText.length}/{MAXIMUM_TEXT_LENGTH}
    </span>
  )
}

export default MaxLengthIndicator
