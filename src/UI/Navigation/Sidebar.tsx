import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { motion } from "framer-motion"
import { utilsNavigation } from "../../utils/navigation"
import { Link, useLocation } from "react-router-dom"
import UIModal from "../Modal"
import UIIcon from "../Icon"
import { IconContext } from "react-icons"
import { MdJoinFull } from "react-icons/md"

const UINavSidebar = () => {
   const context = useContext(ContextMain)
   const location = useLocation()
   return (
      <UIModal>
         <motion.div
            id="nav-sidebar"
            className="absolute right-0 top-0 z-[600] min-h-screen w-2/4 bg-gray-50 dark:bg-primary-900 dark:text-gray-100"
            initial={{ right: "-100%" }}
            animate={{ right: 0 }}
            exit={{ right: "-100%" }}
            transition={{
               delay: 0.1,
               type: "tween",
               duration: 0.15,
            }}
            onClick={(e) => e.stopPropagation()}
         >
            {/* ======================
              Brand
             */}
            <div id="brand-placement" className="p-8 flex flex-col items-center justify-center">
               <UIIcon classes="w-auto h-12 text-primary-500 dark:text-primary-300 opacity-90">
                  <MdJoinFull />
               </UIIcon>
               <h1 className="font-bold text-lg text-primary-500 dark:text-primary-300">The LUX</h1>
            </div>
            {/* ======================
              List of navigation
             */}
            <ul>
               {utilsNavigation.map((nav) => {
                  return (
                     <li
                        key={nav.tag}
                        onClick={context.navSidebar.hide}
                        className={`transition-all duration-300 ${
                           nav.link === location.pathname ? "bg-primary-500 dark:bg-primary-700 text-white dark:text-gray-300" : "text-primary-700 dark:text-primary-400"
                        }`}
                     >
                        <Link key={nav.tag} to={nav.link} className="flex flex-row space-x-4 items-center">
                           <span className="pl-8 py-4">
                              <IconContext.Provider value={{ className: "w-auto h-3" }}>
                                 {nav.icon}
                              </IconContext.Provider>
                           </span>
                           <span className="text-sm">{nav.tag.at(0)?.toUpperCase() + nav.tag.slice(1)}</span>
                        </Link>
                     </li>
                  )
               })}
            </ul>
         </motion.div>
      </UIModal>
   )
}

export default UINavSidebar
