import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootPage from "./UI/RootPage"
import Dashboard, { loader as homeRedirect } from "./features/Dashboard"
import Bookings from "./features/Bookings"
import Cabins from "./features/Cabins"
import Users from "./features/Users"
import Settings from "./features/Settings"
import Account from "./features/Account"
import Auth from "./features/Auth"
import UIErrorPage from "./UI/ErrorPage"

const router = createBrowserRouter([
   {
      path: "/",
      element: <UIRootPage />,
      errorElement: <UIErrorPage />,
      children: [
         { index: true, loader: homeRedirect },
         { path: "dashboard", element: <Dashboard /> },
         { path: "bookings", element: <Bookings /> },
         { path: "cabins", element: <Cabins /> },
         { path: "users", element: <Users /> },
         { path: "settings", element: <Settings /> },
         { path: "account", element: <Account /> },
      ],
   },
   {path:"/auth", element: <Auth />}
])

const App = () => {
   return <RouterProvider router={router} />
}

export default App
