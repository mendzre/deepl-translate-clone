import LanguageSelector from './components/LanguageSelector.tsx'
import useTranslate from '../../hooks/useTranslate'
import { SupportedLanguages } from '../../typings/enums'

function SelectorFrom() {
  const { fromLanguage, toLanguage, setFromLanguage } = useTranslate()

  return (
    <LanguageSelector value={fromLanguage} onChange={setFromLanguage}>
      {Object.entries(SupportedLanguages).map(
        ([key, literal]) =>
          key !== toLanguage && (
            <option key={key} value={key}>
              {literal}
            </option>
          )
      )}
    </LanguageSelector>
  )
}

export default SelectorFrom
