export type TypeCabin = {
  created_at: string,
  description: string,
  discount: number,
  id: number,
  image: string,
  maxCapacity: number,
  name: string,
  regularPrice: number
}

export type TypeCabinstate = {
  isError: boolean|null,
  isLoading: boolean|null,
  error: Error|null
}