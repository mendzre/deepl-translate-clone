import { useEffect } from 'react'
import TranslatorHeader from './TranslatorHeader.tsx'
import TranslatorBody from './TranslatorBody.tsx'
import useTranslate from '../../hooks/useTranslate.ts'
import { useDebounce } from '../../hooks/useDebounce.ts'
import translateText from '../../services/translateText.ts'
import { MAXIMUM_TEXT_LENGTH } from '../../typings/constants.ts'

function Translator() {
  const { fromLanguage, toLanguage, fromText, setResult } = useTranslate()
  const debuncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debuncedFromText === '') return
    if (debuncedFromText.length >= MAXIMUM_TEXT_LENGTH) return

    translateText({ fromLanguage, toLanguage, text: debuncedFromText })
      .then((result) => {
        if (result?.content == null) return
        setResult(result.content)
      })
      .catch(() => {
        setResult(
          'We are unable to complete the translation at the moment. Please try again later.'
        )
      })
  }, [debuncedFromText, fromLanguage, toLanguage])

  return (
    <section className="bg-white border rounded shadow overflow-hidden">
      <TranslatorHeader />

      <TranslatorBody />
    </section>
  )
}

export default Translator
