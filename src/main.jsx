import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import Quotation from './Components/Quotation/Quotation.jsx';
import About from './Components/About/About.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';
import JobDetails from './Components/Home/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/apply",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/quotation",
        element: <Quotation></Quotation>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('./job.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
