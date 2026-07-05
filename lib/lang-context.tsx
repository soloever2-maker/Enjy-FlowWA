'use client'

// Language provider: Arabic default, persisted in localStorage
// ('align-lang'), flips <html> dir/lang for full RTL/LTR support.
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { DICT, DictKey, Lang } from './i18n'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string }

const LangContext = createContext<Ctx>({
  lang: 'ar',
  setLang: () => {},
  t: (k) => DICT[k].ar,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar')

  useEffect(() => {
    const saved = localStorage.getItem('align-lang')
    if (saved === 'en' || saved === 'ar') setLangState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('align-lang', l)
  }

  const t = (k: DictKey) => DICT[k][lang]

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
