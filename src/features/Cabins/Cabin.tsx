type Props = {
   cabin: {
      created_at: string
      id: number
      name: string
      description: string
      maxCapacity: number
      regularPrice: number
      discount: number
      image: string
   }
}

const CabinsCabin: React.FC<Props> = ({ cabin }) => {
   return (
      <>
         <div id="cabin-item" className="flex flex-col space-y-4">
            <div id="cabin-image" className="h-[120px]">
               <img src={cabin.image} alt={`${cabin.name} cabin`} className="h-full w-full object-cover" />
            </div>
            <div id="cabin-info" className="grid grid-cols-[7fr,5fr] gap-x-8">
               <div id="info" className="">
                  <h1 className="text-md font-black leading-1">Cabin {cabin.name}</h1>
                  <h2 className="flex flex-col space-y-1">
                     <span className="text-xs font-normal">{cabin.description}</span>
                     <span className="px-2 py-1 w-4/6 text-center rounded-sm border border-primary-500/40 text-primary-500 text-xs font-medium">
                        max {cabin.maxCapacity} people
                     </span>
                  </h2>
               </div>
               <div id="price" className="justify-self-end">
                  <h3 className="flex flex-col text-right leading-none">
                     <span className="text-info-500 font-extrabold text-2xl">
                        ${cabin.regularPrice - cabin.discount}
                     </span>
                     <span>
                        <span className="text-xs"><i> after the discount and tax. Before it was </i></span>
                        <span className="font-bold text-danger-400 text-md line-through">${cabin.discount}</span>
                     </span>
                  </h3>
               </div>
            </div>
         </div>
      </>
   )
}

export default CabinsCabin
