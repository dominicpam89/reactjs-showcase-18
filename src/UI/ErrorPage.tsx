import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const UIErrorPage = () => {
   const navigate = useNavigate()
   return (
      <div className="p-10 flex flex-col justify-content items-center space-y-5">
         <h1 className="text-4xl font-black text-primary-500">404</h1>
         <p className="text-sm font-medium flex space-x-2 items-center">
            <span>Url not found</span>
            <motion.button
               onClick={() => navigate(-1)}
               className="btn btn-sm btn-primary-outlined"
            >
               go back
            </motion.button>
         </p>
      </div>
   )
}

export default UIErrorPage
