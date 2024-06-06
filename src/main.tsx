import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {store} from './store'
import { Provider } from 'react-redux'
import {router} from './utils/router'
import {  RouterProvider} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
