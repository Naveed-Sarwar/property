import BuyLandCard from '@/components/buyLandCard/BuyLandCard';
import Header from '@/components/header/Header';
import React from 'react';

import { list } from '@/components/constants/data';
import LandMap from '@/components/map/LandMap';
import Link from 'next/link';


const Buyland = () => {
    return (
        <div className='bg-[#1a1212] ' >
            <Header />

            <div className='grid grid-cols-12 gap-8'>
                <div className=' hidden lg:block md:col-span-3 lg:col-span-2 pt-12'>
                    {
                        list?.map((item) => {
                            return <div className='flex flex-col py-3 text-white rounded-md hover:bg-[rgba(134,177,247,0.5)]'>
                           <Link href={`${item?.route}`}>
                             <div className='flex ml-12  text-[#d1d5db] gap-x-3 cursor-pointer'>   <p>{item.icon}</p> <p>{item.title}</p></div>
                             </Link>   </div>
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



export default Buyland