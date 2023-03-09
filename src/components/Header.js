import React from "react"
import Logo from "../images/logo.png"
import Menu1 from "../components/Menu1"
import Menu from "./Menu"
import Menu2 from "./Menu2"
import Menu3 from "./Menu3"
import Menu4 from "./Menu4"
import ProfileMenu from "../components/Profilemenu"

import { useState } from "react"


export default function Header() {
  const[showSubMenu, setShowSubMenu] = useState(false);
  function handleMouseEnter() {
    setShowSubMenu(true);
  }
  function handleMouseLeave () {
    setShowSubMenu(false);

  }
  const[showSubMenu1, setShowSubMenu1] = useState(false);
  function handleMouseEnter1() {
    setShowSubMenu1(true);
  }
  function handleMouseLeave1() {
    setShowSubMenu1(false);

  }

  const[showSubMenu2, setShowSubMenu2] = useState(false);
  function handleMouseEnter2() {
    setShowSubMenu2(true);
  }
  function handleMouseLeave2() {
    setShowSubMenu2(false);

  }

  const[showSubMenu3, setShowSubMenu3] = useState(false);
  function handleMouseEnter3() {
    setShowSubMenu3(true);
  }
  function handleMouseLeave3() {
    setShowSubMenu3(false);

  }
  const[showSubMenu4, setShowSubMenu4] = useState(false);
  function handleMouseEnter4() {
    setShowSubMenu4(true);
  }
  function handleMouseLeave4() {
    setShowSubMenu4(false);

  }
  const[showProfileMenu, setShowProfileMenu] = useState(false);
  function handleMouseEnterp() {
    setShowProfileMenu(true);
  }
  function handleMouseLeavep() {
    setShowProfileMenu(false);

  }
  return (
    <div>
    <div class="flex space-y-4 border-2 lg:fixed top-0 bg-white">
      <div class="flex space-x-6 mt-2 ml-2 mr-4 ">
        <img src={Logo} class="w-16 h-16 "></img>
      </div>
      <div class="hidden lg:flex lg:space-x-12 lg:ml-10 cursor-pointer">
        
          <div class="text-[14px] font-semibold " onMouseEnter={handleMouseEnter} onMouseLeave ={handleMouseLeave} >
            MEN
            {showSubMenu && ( 
            <ul class=" pt-6" >
              <Menu />
            </ul>
            )}
         
        </div>

      
          <div class="text-[14px] font-semibold " onMouseEnter={handleMouseEnter1} onMouseLeave ={handleMouseLeave1}>
            WOMEN
            {showSubMenu1 && ( 
            <ul class=" pt-6 ">
             
              <Menu1 />
            </ul>
            )}
          </div>
       
          <div class="text-[14px] font-semibold " onMouseEnter={handleMouseEnter2} onMouseLeave ={handleMouseLeave2}>
            KIDS
            {showSubMenu2 && (
            <ul class=" pt-6">
              <Menu2 />
            </ul>
            )}
          </div>
       
        
          <div class="text-[14px] font-semibold " onMouseEnter={handleMouseEnter3} onMouseLeave ={handleMouseLeave3}> 
            HOME & LIVING
            {showSubMenu3 && (
            <ul class=" pt-6 ">
              <Menu3 />
            </ul>
             )}
          </div>
        
        
          <div class="text-[14px] font-semibold " onMouseEnter={handleMouseEnter4} onMouseLeave ={handleMouseLeave4}>
            BEAUTY
            {showSubMenu4 &&(
            <ul class=" pt-6">
              <Menu4 />
            </ul>
            )}
          </div>
        
        <a href="/">
          <div class="text-[14px] font-semibold ">STUDIO</div>
        </a>
      </div>
      <input
        type="text"
        placeholder="search for products, brands and more"
        class="hidden lg:block lg:h-10 lg:w-96 lg:ml-12 lg:mr-20 border-2 border-gray-400"
      />
      <div class="flex space-x-6    lg:space-x-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-search w-6 h-6 ml-20 lg:hidden"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-bell w-6 h-6 lg:hidden "
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>
        <div class="hidden lg:block" onMouseEnter={handleMouseEnterp} onMouseLeave ={handleMouseLeavep}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-person w-6 h-6 "
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <div class="text-xs  cursor-pointer " >Profile  {showProfileMenu &&<ProfileMenu />} </div>
        </div>
        <div class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-heart w-6 h-6 "
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <div class="hidden lg:block text-xs">Wishlist</div>
        </div>
        <div class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-bag w-6 h-6 "
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          <div class="hidden lg:block text-xs lg:pr-4">Bag</div>
        </div>
      </div>
      </div>
      
     

    </div>
  )
}
