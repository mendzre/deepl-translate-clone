import type { SupportedLanguage, TranslateActionTypes } from './enums'

export type FromLanguage = keyof typeof SupportedLanguage
export type Language = Exclude<keyof typeof SupportedLanguage, 'AUTO'>

export interface TranslateState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type TranslateAction =
  | { type: TranslateActionTypes.INTERCHANGE_LANGUAGES }
  | { type: TranslateActionTypes.SET_FROM_LANGUAGE, payload: string }
  | { type: TranslateActionTypes.SET_TO_LANGUAGE, payload: string }
  | { type: TranslateActionTypes.SET_FROM_TEXT, payload: string }
  | { type: TranslateActionTypes.SET_RESULT, payload: string }

interface TranslateTextParams {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}
