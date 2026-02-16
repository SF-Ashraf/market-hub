import { RouterProvider } from "react-router-dom";
import router from "./router/router"
import "./App.css"

import React from 'react'

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App