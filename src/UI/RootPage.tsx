import { Outlet } from "react-router-dom";

const RootPage = ()=>{
  return <>
    <header>
      
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
}

export default RootPage