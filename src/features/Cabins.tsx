import { useHooksCabinGetAll } from "../data/hooks/cabins"
import { motion, AnimatePresence } from "framer-motion"
import UIFeedbackSpinner from "../UI/Feedback/Spinner"
import UIFeedbackErrorBlock from "../UI/Feedback/ErrorBlock"
import CabinsCabin from "./Cabins/Cabin"

const Cabins = () => {
   const { cabins, cabinsState } = useHooksCabinGetAll()
   console.log(cabins)
   console.log(cabinsState)
   return (
      <>
         <AnimatePresence>
            {cabinsState.isLoading && (
               <motion.div
                  id="loader-container"
                  className="w-full min-h-[100dvh] flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  <UIFeedbackSpinner />
               </motion.div>
            )}
         </AnimatePresence>
        {cabinsState.isError && <UIFeedbackErrorBlock status={cabinsState.error?.name} message={cabinsState.error?.message} />}
         <div id="cabins-list-container" className="flex flex-col space-y-8 max-w-sm">
            {cabins && cabins.map(cabin=>{
                return <CabinsCabin key={cabin.id} cabin={cabin} />
            })}
         </div>
      </>
   )
}

export default Cabins
