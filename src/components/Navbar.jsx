import React from 'react'
import { useNavigate } from 'react-router'
import { setAuth, setUsernames } from '../store/features/userSlices'
import { useDispatch, useSelector } from 'react-redux'
export default function Navbar() {
  let dispatch  = useDispatch()
  let navigate = useNavigate()
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("login")
    dispatch(setUsernames(null))
    navigate('/login')
  }
  return (
    <div className="w-full">
      <div class="w-full block flex-grow flex items-center">
        <div class="text-sm flex-grow">
          <ul class="flex border-b">
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"  onClick={()=>navigate('/')}>Home</a>
            </li>
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={()=>{navigate("/store")}}>Store</a>
            </li>
            <li class="mr-1">
              <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={()=> navigate("/shopingCart")}>Shoping Cart</a>
            </li>
          </ul>
        </div>
        <div>
            <a onClick={(e)=> logOut(e)} class="inline-block text-sm px-4 py-2 mr-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white">Logout</a>
        </div>
      </div>
  </div>
  )
}
