import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx";
import Image from 'next/image';
import Img from "../../../assets/img-popup.jpeg";
import ImgTwo from "../../../assets/img-popup-two.jpeg";
import ImgThree from "../../../assets/img-popup-three.jpeg";
const ImgPopup = ({open , setOpen}) => {
  
  return (
    <div className='fixed inset-0 bg-white z-[100]  h-[auto] overflow-y-scroll '>

     <div className='absolute right-6 top-4'>
        <RxCross2 fontSize={28} onClick={()=> setOpen(!open)} claassName="cursor-pointer border-[1px] border-gray" />
        </div> 

   <div className='w-9/12 pt-28 flex justify-center flex-col mx-auto overflow-scroll'>
   <Image onClick={() => setOpen(!open)} src={Img} className="cursor-pointer rounded-[1rem]"  />
<br />
<Image src={ImgTwo} className="cursor-pointer rounded-[1rem]" />
<br />
<Image src={ImgThree} className="cursor-pointer  rounded-[1rem]" />
</div>     
         </div>
  )
}

export default ImgPopup;
