import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import DashboardPage from "../components/pages/DashboardPage";
import AboutPage from "../components/pages/AboutPage";
import NavBarModule from "../components/molecules/NavBarModule";

const router = createHashRouter([
  {
    path: "/",
    Component: DashboardPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
])

export default () => (
  <>
    <NavBarModule />
    <RouterProvider router={router} />
  </>
)