import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashbord from "./Dashbord";
import ChartAnalatics from "./ChartAnalatics";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashbord} />
        <Route path="/analytics" component={ChartAnalatics} />
      </Routes>
    </div>
  );
};
