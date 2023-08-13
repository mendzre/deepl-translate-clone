import LanguageSelector from './components/LanguageSelector.tsx'
import useTranslate from '../../hooks/useTranslate'
import { AUTO_LANGUAGE } from '../../typings/constants'
import { SupportedLanguages } from '../../typings/enums'

function SelectorTo() {
  const { fromLanguage, toLanguage, setToLanguage } = useTranslate()

  return (
    <LanguageSelector value={toLanguage} onChange={setToLanguage}>
      {Object.entries(SupportedLanguages).map(
        ([key, literal]) =>
          key !== AUTO_LANGUAGE &&
          key !== fromLanguage && (
            <option key={key} value={key}>
              {literal}
            </option>
          )
      )}
    </LanguageSelector>
  )
}

export default SelectorTo
