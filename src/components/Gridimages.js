import React from 'react'
import Gridimage1 from '../images/Gridimg1.jpg'
import Gridimage2 from '../images/Gridimg2.jpg'
import Gridimage3 from '../images/Gridimg3.png'
import Gridimage4 from '../images/Gridimg4.png'
import Gridimage5 from '../images/Gridimg5.jpg'
import Gridimage6 from '../images/Gridimg6.jpg'
import Gridimage7 from '../images/Gridimg7.jpg'
import Gridimage8 from '../images/Gridimg8.jpg'
import Gridimage9 from '../images/Gridimg9.png'


export default function gridimages() {
  return (
    <div class="flex overflow-scroll">
      <img src={Gridimage1} class="w-40 h-44"></img>
      <img src={Gridimage2} class="w-40 h-44"></img>
      <img src={Gridimage3} class="w-40 h-44"></img>
      <img src={Gridimage4} class="w-40 h-44"></img>
      <img src={Gridimage5} class="w-40 h-44"></img>
      <img src={Gridimage6} class="w-40 h-44"></img>
      <img src={Gridimage7} class="w-40 h-44"></img>
      <img src={Gridimage8} class="w-40 h-44"></img>
      <img src={Gridimage9} class="w-40 h-44"></img>
    </div>
    
  )
}
