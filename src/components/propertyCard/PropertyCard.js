import React from 'react'
import HomeImg from "../../../assets/home.jpeg";
import Image from 'next/image';
const PropertyCard = () => {
  return (
    <div>
          <div className='border-[1px] rounded-[5px] pb-4'>
            <Image src={HomeImg} className="rounded-t-[4px] h-[16rem]" />
            <p className='bg-[#DEDAE5] pl-4 py-1 text-[0.875rem] leading-[1.25rem]'>Sourced 3 days ago</p>
            <div className='pl-4'>

              <div className='flex gap-2 pt-2 items-center'>
                <p className='font-bold text-[#333333] text-[1.5rem]'>$429K</p>
                <p className='bg-[#5FC65F] font-bold text-[0.875rem] h-6 px-2 rounded-xl text-white'>For Sale</p>
              </div>
              <p className='font-medium text-[1.125rem] leading-[1.75rem]'>2528 Harvest Ridge Dr</p>
              <p className='font-normal text-[1.1rem] leading-[1.75rem]'>State College, PA 16803</p>
              <div className='flex gap-4 py-2 items-center pr-4'>
                <p><span className='font-extrabold'>3</span><span className='pl-1 text-[12px]'>bd</span></p>
                <div className='h-4 w-[2px] bg-[#ececec]'></div>
                <p><span className='font-extrabold'>2</span><span className='pl-1 text-[12px]'>ba</span></p>
                <div className='h-4 w-[2px] bg-[#ececec]'></div>   <p><span className='font-extrabold'>1856</span><span className='pl-1 text-[12px]'>sqft</span></p>
                <div className='h-4 w-[2px] bg-[#ececec]'></div> <p className='text-[1rem]'>House</p>
              </div>

              <div className='flex relative'>
                <div className='border-l-[4px] pl-3'>
                  <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Revenue</p>
                  <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>$4,806</span>/mo</p>
                </div>
                <div className='border-l-[4px] absolute left-[50%] pl-3'>
                  <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cap Rate</p>
                  <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>11.5%</span></p>
                </div>
              </div>

              <div className='flex relative pt-4'>
              <div className='border-l-[4px] pl-3'>
                  <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Gross Yeild</p>
                  <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>10.5%</span></p>
                </div>
                <div className='border-l-[4px] absolute left-[50%]  pl-3'>
                  <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cash on Cash</p>
                  <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>14.4%</span></p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PropertyCard