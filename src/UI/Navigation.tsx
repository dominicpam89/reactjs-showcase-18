import UINavSidebar from "./Navigation/Sidebar"
import UIIcon from "./Icon"
import { FaBars } from "react-icons/fa"
import { MdJoinFull } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { ContextMain } from "../data/context/main"

const UINavMain = () => {
   const context = useContext(ContextMain)
   return (
      <>
         <motion.nav
            initial={{ y: "var(--y-from)" }}
            animate={{ y: "var(--y-to)" }}
            exit={{ y: "var(--y-from)" }}
            className="p-4 flex flex-row justify-between items-center 
               bg-gradient-to-br from-primary-500 dark:from-primary-900 to-rose-500 dark:to-primary-800 
               shadow-lg h-full [--y-from:-100px] [--y-to:0px]
            "
         >
            <div className="flex flex-row space-x-3 items-center cursor-pointer">
               <motion.div
                  id="brand-container"
                  animate={{ scaleX: [1, -1, -1, 1] }}
                  transition={{ times: [0.4, 0.5, 0.9, 1], duration: 5, repeat: Infinity }}
               >
                  <UIIcon classes="w-auto h-6 text-gray-50 dark:text-gray-300 opacity-90">
                     <MdJoinFull />
                  </UIIcon>
               </motion.div>
               <h1 className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-bl from-gray-50 to-rose-100 dark:from-gray-300/90 dark:to-rose-200/90">
                  The LUX
               </h1>
            </div>
            <motion.button onClick={() => context.navSidebar.show()} whileTap={{ scale: 0.9 }}>
               <UIIcon classes="w-auto h-5 text-gray-50 dark:text-gray-300/90 opacity-80 cursor-pointer">
                  <FaBars />
               </UIIcon>
            </motion.button>
         </motion.nav>
         <AnimatePresence mode="sync">{context.navSidebar.visibility && <UINavSidebar />}</AnimatePresence>
      </>
   )
}

export default UINavMain
