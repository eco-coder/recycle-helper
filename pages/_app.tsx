import '../styles/globals.sass'

import { FC, createContext, useMemo, useState } from 'react'

import { AppProps } from 'next/app'

export interface GlobalContextType {
  count: number
  setCount: (c: number) => void
}

export const GlobalContext = createContext<GlobalContextType>({} as any)

const App: FC<AppProps> = ({ Component, pageProps }) => {

  const [count, setCount] = useState(1)

  const globalContextValue = useMemo(() => ({
    count,
    setCount
  }), [count, setCount])

  return (
    <GlobalContext.Provider value={globalContextValue} >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}
export default App
