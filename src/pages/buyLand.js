import BuyLandCard from '@/components/buyLandCard/BuyLandCard';
import Header from '@/components/header/Header';
import React from 'react'
// import { BiSolidLandscape } from "react-icons/bi";
// import { BsFillPersonFill } from 'react-icons/bs';
// import { AiFillPropertySafety, AiTwotoneTool } from "react-icons/ai";
// import { FaTools } from "react-icons/fa";
import MarketMap from '@/components/map/MarketMap';
import { list } from '@/components/constants/data';
import LandMap from '@/components/map/landMap';
const BuyLand = () => {
    // const list = [
    //     { title: "Buy Land", icon: <BiSolidLandscape fontSize={24} /> },
    //     { title: "Potfolio", icon: <BsFillPersonFill fontSize={24} /> },
    //     { title: "On ramp a property", icon: <AiFillPropertySafety fontSize={24} /> },
    //     { title: "Use Your Land", icon: <FaTools fontSize={22} /> },
    //     { title: "Build on Aasthi", icon: <AiTwotoneTool fontSize={24} /> }
    // ]
    return (
        <div className='bg-[#121212] ' >
            <Header />

            <div className='grid grid-cols-12 gap-8'>
                <div className=' hidden lg:block md:col-span-3 lg:col-span-2 pt-12'>
                    {
                        list?.map((item) => {
                            return <div className='flex flex-col py-3 text-white rounded-md hover:bg-[rgba(134,177,247,0.5)]'>
                                <div className='flex ml-12  text-[#d1d5db] gap-x-3 cursor-pointer'>   <p>{item.icon}</p> <p>{item.title}</p></div>
                            </div>
                        })
                    }
                </div>
                <div className='col-span-12 lg:col-span-10 pt-16'>
                  <div className=' lg:mr-16'>
                      <LandMap />
                      </div>
                <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center'>
                        <BuyLandCard />
                   </div>
                </div>
                <br />
            </div>

        </div>
    )
}

export default BuyLand