
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import JobDetails from "./Components/JobDetails/JobDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />, // Error boundary for route errors
    children: [
      { index: true, element: <Home /> },
      { path: "applied", element: <AppliedJobs />,
        loader: async () => {
          const response = await fetch('/jobs.json'); // Use root-relative path
          if (!response.ok) {
            throw new Error("Failed to fetch jobs data.");
          }
          return response.json(); // Return the data for use in the component
        },
       },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: async () => {
          const response = await fetch('/jobs.json'); // Use root-relative path
          if (!response.ok) {
            throw new Error("Failed to fetch jobs data.");
          }
          return response.json(); // Return the data for use in the component
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
