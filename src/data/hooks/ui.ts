import { useState, useEffect } from "react"
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
   useEffect(()=>{
      if(theme==="dark" || window.matchMedia('(prefers-color-scheme: dark)').matches){
         document.documentElement.classList.add("dark")
      }
      else{
         document.documentElement.classList.remove("dark")
      }
   },[theme])
   const themeState = {
      current: theme,
      changeTheme: (theme:TypeContextThemeOptions) => setTheme(theme),
   }
   return themeState
}
