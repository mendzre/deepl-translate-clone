import { useContext } from 'react'
import { TranslateContext } from '../context/translate.tsx'

export const useTranslate = () => {
  const context = useContext(TranslateContext)

  if (context === undefined) {
    throw new Error('useTranslate must be used within a TranslateProvider')
  }

  return context
}

export default useTranslate
