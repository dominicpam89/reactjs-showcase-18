import { supabase } from "./supabase"

export const serviceCabinGetAll = async () => {
   const { data: cabins, error } = await supabase.from("cabins").select("*")
   if(error) throw new Error("Couldn't get cabins data")
   return cabins
}
