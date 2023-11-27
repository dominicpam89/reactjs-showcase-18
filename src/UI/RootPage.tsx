import { Outlet } from "react-router-dom";

const UIRootPage = ()=>{
  return <>
    <header>
      
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
}

export default UIRootPage