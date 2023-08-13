import { createContext, type ReactNode } from 'react'
import useTranslateReducer from '../hooks/useTranslateReducer'

export const TranslateContext =
  createContext<ReturnType<typeof useTranslateReducer> | undefined>(undefined)

interface Props {
  children: ReactNode
}

export function TranslateProvider({ children }: Props) {
  const {
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
  } = useTranslateReducer()

  return (
    <TranslateContext.Provider
      value={{
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
      }}
    >
      {children}
    </TranslateContext.Provider>
  )
}
