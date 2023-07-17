import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios"
import { setLogout } from "../store/userSlice";

import { useCallback, useRef } from "react";


export const Navigation=() =>{
  const [openNav, setOpenNav] = useState(false);
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const intervalRef = useRef();

  const getToken = useCallback(
    () => {
    
      const refresh=sessionStorage.getItem("refresh");
      const access=sessionStorage.getItem("access");
      let data = new FormData();
      data.append('refresh', refresh);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/user_auth/token/refresh/',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer '+ access,
        },
        data : data
      };

      axios.request(config)
      .then((response) => {
        console.log("updated tokens");
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
      })
      .catch((error) => {
        console.log(error);

      });


      
    },
    []
  );
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

    const interval = setInterval(() => getToken(), 7800000);
    intervalRef.current = interval;
    return () => clearInterval(interval);
  }, [getToken]);

  const handleLogOut = (e) => {
    e.preventDefault();
    const refresh=sessionStorage.getItem("refresh");
    const access=sessionStorage.getItem("access");
    console.log(refresh);
    let data = JSON.stringify({
      "refresh":refresh
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/user_auth/logout/',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+ access,
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data)); 
      console.log(response.status);
      dispatch(setLogout());
    })
    .catch((error) => {
      console.log(error);
      dispatch(setLogout());
    });
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
    clearInterval(intervalRef.current);
  }
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      <Typography
        as="h1"
        variant="small"
        color="blue-gray"
        className="p-3 font-normal lg:hidden"
      >
       <span className="flex text-center" > User: {user.uname}</span>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/experience" className="flex items-center">
          Experience
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/map" className="flex items-center">
          Map
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Food & Drinks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Events & News
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Booking
        </a>
      </Typography> */}
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <a href="/home" className="flex items-center">
             My Map
          </a>
         
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <span className="w-96 text-end hidden lg:inline-block mr-5">
          {user.uname}
          </span>
        <Button variant="gradient" onClick={handleLogOut} size="sm" className="hidden lg:inline-block">
          <span>Log Out</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button onClick={handleLogOut} variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Log Out</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
