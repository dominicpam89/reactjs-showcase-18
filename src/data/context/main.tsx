import { useHooksTheme } from "../hooks/ui"
import { useHooksNavSidebar } from "../hooks/ui"
import { ContextTheme } from "./theme"
import { ContextNavSidebar } from "./navSidebar"
import { TypePropsChildren } from "../types/props"
import { createContext } from "react"

export const ContextMain = createContext({
   theme: ContextTheme,
   navSidebar: ContextNavSidebar
})

const ContextMainProvider: React.FC<TypePropsChildren> = ({ children }) => {
   const theme = useHooksTheme()
   const navSidebar = useHooksNavSidebar()
   return (
      <ContextMain.Provider
         value={{
            theme,
            navSidebar,
         }}
      >
         {children}
      </ContextMain.Provider>
   )
}

export default ContextMainProvider
