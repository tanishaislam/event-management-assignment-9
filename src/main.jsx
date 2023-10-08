import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom';
import AllRouts from './AllRouts/AllRouts.jsx';
import AuthProviders from './Components/providers/AuthProviders';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={AllRouts} />
    </AuthProviders>
  </React.StrictMode>,
)
