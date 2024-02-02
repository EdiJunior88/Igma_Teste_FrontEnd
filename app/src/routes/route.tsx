import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "@/pages/index";
// import Login from "@/pages/login";

import "@/css/index.css";

const Home = React.lazy(() => import("@/pages/index"));
const Login = React.lazy(() => import("@/pages/login"));

const Route = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Login />
      </React.Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>,
);

export default Route;
