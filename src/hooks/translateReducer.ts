import { AUTO_LANGUAGE } from '../typings/constants'
import { TranslateActionTypes } from '../typings/enums'
import type { TranslateState, TranslateAction } from '../typings/types.d'

function translateReducer(state: TranslateState, action: TranslateAction) {
  const { type } = action

  if (type === TranslateActionTypes.INTERCHANGE_LANGUAGES) {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    if (state.fromLanguage === state.toLanguage) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      loading: state.fromText !== ''
    }
  }

  if (type === TranslateActionTypes.SET_FROM_LANGUAGE) {
    if (state.fromLanguage === action.payload) return state

    return {
      ...state,
      fromLanguage: action.payload,
      loading: state.fromText !== ''
    }
  }

  if (type === TranslateActionTypes.SET_TO_LANGUAGE) {
    if (state.toLanguage === action.payload) return state

    return {
      ...state,
      toLanguage: action.payload,
      result: state.fromText !== '' ? '' : state.result,
      loading: state.fromText !== ''
    }
  }

  if (type === TranslateActionTypes.SET_FROM_TEXT) {
    return {
      ...state,
      fromText: action.payload,
      result: '',
      loading: action.payload !== ''
    }
  }

  if (type === TranslateActionTypes.SET_RESULT) {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return state
}

export default translateReducer
