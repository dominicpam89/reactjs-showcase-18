import { Outlet } from "react-router-dom";
import UINavMain from "./Navigation";

const UIRootPage = ()=>{
  return <>
    <header>
      <UINavMain />
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
}

export default UIRootPage