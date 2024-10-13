import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"

import PostData from "./components/PostData"

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/postData",
      element:<PostData/>
    }

  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App