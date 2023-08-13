import TextArea from './components/TextArea'
import CleaningButton from './controls/CleaningButton.tsx'
import MaxLengthIndicator from './controls/MaxLengthIndicator.tsx'
import useTranslate from '../../hooks/useTranslate'

function TextAreaFrom() {
  const { fromText, setFromText } = useTranslate()

  return (
    <TextArea
      id="textarea-from"
      value={fromText}
      onChange={setFromText}
      placeholder="Type to translate"
      ariaLabel="Type to translate"
      autoFocus={true}
    >
      {fromText !== '' && <CleaningButton />}
      {fromText !== '' && <MaxLengthIndicator />}
    </TextArea>
  )
}

export default TextAreaFrom
