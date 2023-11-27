import { IconContext } from "react-icons"

type TypePropsIcon = {
  children: React.ReactNode,
  classes?: string,
}

const UIIcon:React.FC<TypePropsIcon> = ({classes, children}) => {
  return <IconContext.Provider value={{ 
    className: `${classes!==undefined ? classes:"h-6 w-6 text-primary-500"}`
  }}>
    {children}
  </IconContext.Provider>
}
 
export default UIIcon;