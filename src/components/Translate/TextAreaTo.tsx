import TextArea from './components/TextArea.tsx'
import ClipboardButton from './controls/ClipboardButton.tsx'
import Loader from './controls/Loader.tsx'
import SpeechButton from './controls/SpeechButton.tsx'
import useTranslate from '../../hooks/useTranslate'

function TextAreaTo() {
  const { result, loading } = useTranslate()

  return (
    <TextArea
      id="textarea-to"
      ariaLabel="See the translated result"
      value={result}
    >
      {loading !== undefined && loading && <Loader />}
      {result !== '' && <ClipboardButton />}
      {result !== '' && <SpeechButton />}
    </TextArea>
  )
}

export default TextAreaTo
