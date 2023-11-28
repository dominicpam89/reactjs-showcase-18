import { useHooksCabinGetAll } from "../data/hooks/cabins";
import UIFeedbackSpinner from "../UI/Feedback/Spinner";

const Cabins = () => {
  const {cabins, cabinsState} = useHooksCabinGetAll()
  console.log(cabins)
  console.log(cabinsState)
  return <>
    <div id="loader-container" className="pt-4 w-full flex justify-center">
      <UIFeedbackSpinner />
    </div>
    <h1 className="text-2xl">Cabins</h1>
  </>
}
 
export default Cabins;