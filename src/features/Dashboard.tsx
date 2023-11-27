import { redirect } from "react-router-dom"

const Dashboard = () => {
  return <>
    <h1 className="text-2xl">Dashboard</h1>
  </>
}
 
export default Dashboard;

export const loader = ()=>{
  return redirect("/dashboard")
}