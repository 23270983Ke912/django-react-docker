import React, { useEffect, useCallback, useState } from "react";
import axios from "axios"
import useWebSocket, { ReadyState } from 'react-use-websocket';


export const Sharetable = () => {

  const [location_of_fire, setlocation_of_fire] = useState()
  const [safe_to_leave, setsafe_to_leave] = useState()
  const [direction_and_speed, setdirection_and_speed] = useState()
  const [firefighters_activity, setfirefighters_activity] = useState()
  const [number_of_firefighters, setnumber_of_firefighters] = useState()
  const [what_is_on_fire, setwhat_is_on_fire] = useState()
  const [google_map, setgoogle_map] = useState()

const [timer, setTimer] = React.useState(null)
const [isMounted, setIsMounted] = React.useState(false)

async function updateDevicePosition () {
  let data = '';

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    //url: 'http://192.168.50.163:8000/cc/',
    url: 'http://127.0.0.1:8000/cc/',
    headers: { },
    data : data
  };
  try {

    axios.request(config)
    .then((response) => {
      setlocation_of_fire(response.data.what_is_on_fire);
      setsafe_to_leave(response.data.safe_to_leave);
      setdirection_and_speed(response.data.direction_and_speed);
      setfirefighters_activity(response.data.firefighters_activity);
      setnumber_of_firefighters(response.data.number_of_firefighters);
      setwhat_is_on_fire(response.data.what_is_on_fire);
      setgoogle_map(response.data.google_map);
      console.log(what_is_on_fire);
    })
    .catch((error) => {
      console.log(error);
    });
  } catch (e) {
    console.error(e)
  }
  clearTimeout(timer)
  setTimer(setTimeout(updateDevicePosition, 2000))
}

useEffect(() => {
  if (!isMounted) {
     //updateDevicePosition()
     //setIsMounted(false)
  }
})


const [socketUrl, setSocketUrl] = useState('ws://127.0.0.1:8000/ws/socket-server/');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);



 

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];







  return (
    
    <section class="m-200">
         <div>
    
      <h1>WebSocket Test</h1>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900">
<div class="prose svelte-1ybaih5" id="component-254">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">The location of the fire</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" Value={location_of_fire}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>            
                </tr>
            <tr>
                <td class="w-4 p-4">Whether it is safe to leave</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" Value={safe_to_leave}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>    
                </tr>
            <tr>
                <td class="w-4 p-4">Which direction the fire is travelling in and speed</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" Value={direction_and_speed}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>   
            </tr>
            <tr>
                <td class="w-4 p-4">What firefighters are doing</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" Value={firefighters_activity}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>   
            </tr>
            <tr>
                <td class="w-4 p-4">How many firefighters are on the scene</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" Value={number_of_firefighters}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>   
            </tr>
            <tr>
                <td class="w-4 p-4">What is on fire</td>
                <td><input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={what_is_on_fire}/></td>
                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm</button></td>   
            </tr>
        </tbody>
    </table>
    <h1>Google Map Link</h1>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th>Location</th>
            <th>Google Map Link</th>
        </tr>
    </thead>
    <tbody>
    <tr><td>Stirling Highway, Nedlands</td><td><button type="button" href="https://www.google.com/maps/place/Stirling+Hwy,+Nedlands+WA+6009,+Australia/@-31.9649936,115.8174563,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32b3d9f2f1f9f3:0x9f3f9c3a3f9f7d2a!8m2!3d-31.9649936!4d115.819645" target="_blank">link</button></td></tr><tr><td>Broadway and Stirling Highway</td><td><button href="https://www.google.com/maps/place/Broadway+St+%26+Stirling+Hwy,+Nedlands+WA+6009,+Australia/@-31.9650013,115.8174563,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32b3d9f2f1f9f3:0x9f3f9c3a3f9f7d2a!8m2!3d-31.9650013!4d115.819645" target="_blank">link</button></td></tr> </tbody>
      </table>
      </div>
      </div>
      </div>
      </section>)
}
export default Sharetable;