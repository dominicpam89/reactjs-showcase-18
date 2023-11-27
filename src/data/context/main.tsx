import { ContextTheme, TypeContextThemeOptions } from "./theme"
import { TypePropsChildren } from "../types/props"
import { createContext, useState } from "react"

export const ContextMain = createContext({
  theme:ContextTheme,
})

const ContextMainProvider:React.FC<TypePropsChildren> = ({children})=>{
  const [theme, setTheme] = useState<TypeContextThemeOptions>("light")
  return <ContextMain.Provider value={{
    theme:{
      current: theme,
      changeTheme: (theme)=>setTheme(theme)
    }
  }}>
    {children}
  </ContextMain.Provider>
}

export default ContextMainProvider