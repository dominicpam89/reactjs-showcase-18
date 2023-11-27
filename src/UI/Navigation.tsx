import UIIcon from "./Icon"
import { FaBars } from "react-icons/fa"
import { MdJoinFull } from "react-icons/md"
import { motion } from "framer-motion"

const UINavMain = () => {
   return (
      <>
         <motion.nav
            initial={{
               y: "var(--y-from)",
            }}
            animate={{
               y: "var(--y-to)",
            }}
            exit={{
              y:"var(--y-from)"
            }}
            className="p-4 flex flex-row justify-between items-center bg-gradient-to-br from-primary-500 to-rose-500 drop-shadow-sm h-full [--y-from:-100px] [--y-to:0px]"
         >
            <div className="flex flex-row space-x-3 items-center cursor-pointer">
               <motion.div id="brand-container"
                animate={{ scaleX: [1,-1,-1,1]}}
                transition={{times:[0.4,0.5,0.9,1], duration:5, repeat:Infinity}}
               >
                <UIIcon classes="w-auto h-6 text-gray-50 opacity-90">
                    <MdJoinFull />
                </UIIcon>
               </motion.div>
               <h1 className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-bl from-gray-50 to-rose-100">
                  The LUX
               </h1>
            </div>
            <button>
              <UIIcon classes="w-auto h-6 text-gray-50 opacity-80 cursor-pointer">
                <FaBars />
              </UIIcon>
            </button>
         </motion.nav>
      </>
   )
}

export default UINavMain
