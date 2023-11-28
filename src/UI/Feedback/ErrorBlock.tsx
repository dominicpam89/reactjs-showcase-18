type Props = {
  status?: number|string,
  message?: string
}

const UIFeedbackErrorBlock:React.FC<Props> = ({status="500",message="Internal Error"}) => {
  return <>
    <div id="error-block" className="w-full mt-2 border border-gray-800/10 dark:border-gray-500/10 p-8 rounded-lg shadow-md dark:shadow-gray-500/10">
      <h1 className="text-center text-2xl font-extrabold text-danger-600 dark:text-danger-400">{status}</h1>
      <p className="text-center text-xs font-normal text-gray-900 dark:text-gray-300">{message}</p>
    </div>
  </>
}
 
export default UIFeedbackErrorBlock;