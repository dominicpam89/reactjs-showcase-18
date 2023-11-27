import { useState } from "react"
import { TypeContextThemeOptions } from "../context/theme"

export const useHooksNavSidebar = () => {
   const [navSidebar, setNavSidebar] = useState(false)
   const navSidebarState = {
      visibility: navSidebar,
      show: () => setNavSidebar(true),
      hide: () => setNavSidebar(false),
   }
   return navSidebarState
}

export const useHooksTheme = () => {
   const [theme, setTheme] = useState<TypeContextThemeOptions>("light")
   const themeState = {
      current: theme,
      changeTheme: (theme:TypeContextThemeOptions) => setTheme(theme),
   }
   return themeState
}
