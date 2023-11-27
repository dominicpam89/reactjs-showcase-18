export type TypeContextThemeOptions = "light"|"dark"

export type TypeContextTheme = {
   current: TypeContextThemeOptions
   changeTheme: (theme: TypeContextThemeOptions) => void
}

export const ContextTheme: TypeContextTheme = {
   current: "light",
   changeTheme: (theme) => {
      theme
   },
}
