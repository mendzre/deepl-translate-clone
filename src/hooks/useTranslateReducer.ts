import { useReducer } from 'react'
import translateReducer from './translateReducer'
import { INITIAL_TRANSLATE_STATE } from '../typings/constants'
import { TranslateActionTypes } from '../typings/enums'
import type { FromLanguage, Language } from '../typings/types.d'

function useTranslateReducer() {
  const [
    { fromLanguage, toLanguage, fromText, result, loading },
    translateDispatch
  ] = useReducer(translateReducer, INITIAL_TRANSLATE_STATE)

  function interchangeLanguages() {
    translateDispatch({ type: TranslateActionTypes.INTERCHANGE_LANGUAGES })
  }

  function setFromLanguage(payload: FromLanguage) {
    translateDispatch({
      type: TranslateActionTypes.SET_FROM_LANGUAGE,
      payload: payload.toString()
    })
  }

  function setToLanguage(payload: Language) {
    translateDispatch({
      type: TranslateActionTypes.SET_TO_LANGUAGE,
      payload: payload.toString()
    })
  }

  function setFromText(payload: string) {
    translateDispatch({ type: TranslateActionTypes.SET_FROM_TEXT, payload })
  }

  function setResult(payload: string) {
    translateDispatch({ type: TranslateActionTypes.SET_RESULT, payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}

export default useTranslateReducer
