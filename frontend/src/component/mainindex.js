import React from "react";
import Login from "./login";
import { useSelector } from "react-redux";
import Home from "./home";
import Cookies from 'universal-cookie';
import axios from "axios"
const Mainindex = () => {
    const state = useSelector((state) => state.user);
  return (
    <div>
      {state.profile.isLogin ? <Home />: <Login />}
    </div>
  );
};
export default Mainindex;