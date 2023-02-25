import React from "react";
// import App  from "../App"
import Navbar from "./Navbar";
import AllRoutesAndPages from "./AllRoutes&Pages";
import Dialog from "./Dialog";

export default function App() {
  return (
    <>
      <Navbar />
      <Dialog />
      <AllRoutesAndPages />
    </>
  );
}