import { useState, useEffect } from "react"
import { TypeCabin, TypeCabinstate } from "../types/service"
import { serviceCabinGetAll } from "../services/cabins"
import { useQuery } from "@tanstack/react-query"

export const useHooksCabinGetAll = () => {
   const [cabins, setCabins] = useState<TypeCabin[]>([])
   const [cabinsState, setCabinsState] = useState<TypeCabinstate>({
      isError: null,
      error: null,
      isLoading: null,
   })
   const { data, isError, isLoading, error } = useQuery({
      queryKey: ["cabins"],
      queryFn: serviceCabinGetAll,
   })
   useEffect(() => {
      isLoading === false && data ? setCabins(data) : setCabins([])
   }, [isLoading, data, setCabins])
   useEffect(() => {
      isLoading !== null
         ? setCabinsState((ps) => ({ ...ps, isLoading }))
         : setCabinsState((ps) => ({ ...ps, isLoading: null }))
      isLoading === false && isError
         ? setCabinsState((ps) => ({ ...ps, error, isError }))
         : setCabinsState((ps) => ({ ...ps, error, isError }))
   }, [isLoading, isError, error, setCabinsState])
   return { cabins, cabinsState }
}
