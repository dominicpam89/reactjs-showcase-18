import { useHooksCabinGetAll } from "../data/hooks/cabins";

const Cabins = () => {
  const {cabins, cabinsState} = useHooksCabinGetAll()
  console.log(cabins)
  console.log(cabinsState)
  return <>
    <h1 className="text-2xl">Cabins</h1>
  </>
}
 
export default Cabins;