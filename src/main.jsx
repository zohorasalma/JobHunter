import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import AppliedJobs from './components/Applied-Jobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import getJobDetails from './loader/JobDetailsLoader';
import getAppliedJobsFromDb from './loader/AppliedJobsLoader';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: getAppliedJobsFromDb,
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
      ,
      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader: ({params})=>getJobDetails(params.id) ,
      }
      ,
      {
        path: 'statistics',
        element:<Statistics></Statistics>
      }
      ,
      {
        path: '*',
        element:<ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
