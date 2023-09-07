import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Navbarfilter = ({children}) => {
    const location = useLocation()
    const [shownavbar, setShownavbar] = useState(false)
    useEffect(() => {
        if(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register'|| location.pathname === '/sharetable'|| location.pathname === '/sharetable/'){
            setShownavbar(false)
        }else{
            setShownavbar(true)
        }
    },[location])
  return (
    <div>{shownavbar && children}</div>
  )
}

export default Navbarfilter