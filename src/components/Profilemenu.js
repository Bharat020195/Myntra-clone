import React from 'react'

export default function Profilemenu() {
  return (
    <div class= "flex flex-col absolute right-10 top-[75px] gap-x-10 bg-white pl-8 pt-4 font-light space-y-4 w-72 h-[450px] text-sm border-2 ">
      <div class="font-semibold">Welcome</div>
      <div class="flex flex-col">To acess account and manage orders
        <button class="mt-6 border-2 w-28 h-10 text-pink-600 font-bold ">LOGIN/SIGNUP</button>
      </div>
     <ul class="space-y-1 pt-4 ">
        <li>Orders</li>
        <li>Wishlist</li>
        <li>Gift Cards</li>
        <li>Contact Us</li>
        <li>Myntra Insider</li>
        <li>Myntra Credit</li>
        <li>Coupons</li>
        <li>Saved Cards</li>
        <li>Saved VPA</li>
        <li>Saved Addresses</li>

        </ul>
    </div>
  )
}










