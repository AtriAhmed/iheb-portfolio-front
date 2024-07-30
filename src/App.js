import React from "react";

// We use Route in order to define the different routes of our application
import { Outlet } from "react-router-dom";


import axios from 'axios'
import "animate.css";
import UIToolsProvider from "./contexts/UIToolsProvider";

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="">
      <div >
        <UIToolsProvider>
          <Outlet />
        </UIToolsProvider>
      </div>
    </div>
  );
}

export default App;
