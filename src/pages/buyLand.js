import BuyLandCard from '@/components/buyLandCard/BuyLandCard';
import Header from '@/components/header/Header';
import React, { useState } from 'react';

import { list } from '@/components/constants/data';
import LandMap from '@/components/map/LandMap';
import Link from 'next/link';
import { BsStickiesFill } from 'react-icons/bs';
import Person from "../../assets/person.jpg";
import Image from 'next/image';
import { SiAdguard } from 'react-icons/si';
import { GiProgression } from "react-icons/gi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiArrowDownCircle, HiArrowUpCircle } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import IconImg from "../../assets/icon.png";
// import Video from "../../public/"
import ReactPlayer from "react-player";
import Plot from "../../assets/plot.png";
const Buyland = () => {

    const [show, setShow] = useState(false);
    const [basic, setBasic] = useState(false);
    const [onChain, setOnChain] = useState(false);
    const [opreating, setOperating] = useState(false);
    const [pass, setPass] = useState(false);
    return (

        <div className='bg-[#1a1212] ' >
            <Header />

            <div className='grid grid-cols-12 gap-8'>
                <div className=' hidden lg:block md:col-span-3 lg:col-span-2 pt-12'>
                    {
                        list?.map((item) => {
                            return <div className='flex flex-col py-3 text-white rounded-md hover:bg-[rgba(134,177,247,0.5)]'>
                                <Link target='_blank' href={`${item?.route}`}>
                                    <div className='flex ml-12  text-[#d1d5db] gap-x-3 cursor-pointer'>   <p>{item.icon}</p> <p>{item.title}</p></div>
                                </Link>   </div>
                        })
                    }
                </div>
                {
                    show ? <div className='col-span-12 lg:col-span-10'>
                        {/* <LandMap /> */}
                        <div className='grid grid-cols-12 gap-20'>

                            <div className='col-span-8'>
                                <p className='text-4xl py-2 font-medium text-white'>APN 074-142-22, Zayante, CA</p>
                                {/* <video className='h-[300px] w-full' controls autoPlay>
                                    <source src={'../../assets/video/video'} type="video/mp4" />
                                </video> */}
                                {/* <video
                                    width="100%"
                                    height="auto"
                                    className="z-100"
                                    controls
                                    playing
                                    loop      >
                                    <source src='../../public/assets/video/video.mp4' />
                                </video> */}
<Image src={Plot} />
                                <div>
                                    <div className='bg-[#272626] text-white px-4 flex items-center gap-x-3 py-5'>
                                        <BsStickiesFill />   <p className='text-2xl'>Description</p>
                                    </div>
                                    <div className='text-white bg-[#131212] py-6 px-11 text-lg'>

                                        Prime Residential Land Plot in Ayyapa Society, Madhapur
                                        Welcome to an exceptional opportunity to own a prime residential land plot nestled in the serene and sought-after neighborhood of Ayyapa Society, Madhapur, Hyderabad, India. This meticulously curated plot presents an ideal canvas for your dream home or a lucrative investment in one of the city's most thriving locales.
                                        <br />Location:
                                        The land plot is strategically situated in Ayyapa Society, an upscale and well-established locality known for its tranquil surroundings and excellent connectivity. Its proximity to the bustling IT and financial districts of Madhapur makes it an ideal choice for professionals and families seeking a perfect work-life balance.
                                        <br />Land Area:
                                        Spanning an expansive area of 500 square yards, this generous plot offers ample space to design and construct your dream home, incorporating all the amenities and features you desire.
                                        <br />Land Type:
                                        This plot is categorized as residential, making it an attractive prospect for those looking to build their own customized living space in a well-developed neighborhood.
                                        <br />Ownership:
                                        The land holds a clear and marketable title, offering peace of mind to prospective buyers with a seamless transfer of ownership.
                                        <br />Developments:
                                        The plot is ready for construction, sparing you the hassle of any initial groundwork. Embrace the joy of building a home that perfectly aligns with your vision and lifestyle preferences.
                                        <br />Nearby Amenities:
                                        Residents of Ayyapa Society enjoy easy access to a plethora of amenities, including renowned educational institutions, top-notch healthcare facilities, vibrant shopping centers, and recreational hubs. The area's rich infrastructure and proximity to various entertainment options ensure a convenient and fulfilling lifestyle.
                                        <br />Accessibility:
                                        The plot benefits from excellent transport links and road connectivity, providing smooth commutes to major landmarks and business hubs across Hyderabad.
                                        <br />Investment Potential:
                                        In addition to being an exceptional opportunity for creating a personalized haven, this land plot holds immense investment potential. The thriving real estate market in Madhapur and its proximity to key commercial districts make it a promising asset for long-term growth and appreciation.
                                        Don't miss this chance to be a part of the esteemed Ayyapa Society community, where comfort, convenience, and a vibrant lifestyle converge seamlessly. Embrace the true essence of urban living while being surrounded by green spaces and modern amenities.
                                        8:39
                                        make it so that it expands so it doesn’t show all the text and take up the whole space




                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div className='bg-[#272626] text-white px-4  py-5'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-x-3'>
                                                <SiAdguard />   <p className='text-2xl'>Confidence Score</p>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <p className='text-2xl'>1132</p>
                                                <GiProgression fontSize={20} className='text-[#80d0d3]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-white bg-[#131212] py-6 px-11 text-lg'>
                                        <div onClick={() => setBasic(!basic)} className='bg-[#DEBD6D] my-2 flex justify-between items-center rounded-md py-2 px-4 cursor-pointer' ><p>Basic Validation</p>
                                            <SlArrowUp className={basic ? "rotate-180" : ""} />
                                        </div>
                                        {
                                            basic && <div className='p-3'>
                                                <p className='text-xl py-2'>Is the NFT correctly formed?</p>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Token not Burned</p>
                                                </div>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Proof of Title Available</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>GPS Coordinates Are Valid</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Holding Entity Declared</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Claim Defined in Token Metadata</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Operating Agreement Available</p>
                                                </div>    </div>
                                        }

                                        <div onClick={() => setOnChain(!onChain)} className='bg-[#DEBD6D] my-2 flex justify-between items-center rounded-md py-2 px-4 cursor-pointer' ><p>On-Chain history</p>
                                            <SlArrowUp className={onChain ? "rotate-180" : ""} />
                                        </div>
                                        {
                                            onChain && <div className='p-3'>
                                                <p className='text-xl py-2'>Level of confidence in transactions performed on chain</p>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>All Tranfers KYC'd</p>
                                                </div>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Current Owners KYC'd</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Current Owners Not in Darklist</p>
                                                </div>
                                            </div>
                                        }

                                        <div onClick={() => setOperating(!opreating)} className='bg-[#DEBD6D] my-2 flex justify-between items-center rounded-md py-2 px-4 cursor-pointer' ><p>Operating-Agreement Level</p>
                                            <SlArrowUp className={opreating ? "rotate-180" : ""} />
                                        </div>
                                        {
                                            opreating && <div className='p-3'>
                                                <p className='text-xl py-2'>Level of features enabled by the legal instrument used</p>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />
                                                    <p>Under a v3.x Operating Agreement</p>
                                                </div>

                                            </div>
                                        }

                                        <div onClick={() => setPass(!pass)} className='bg-[#DEBD6D] my-2 flex justify-between items-center rounded-md py-2 px-4 cursor-pointer' ><p>Pass Title and Load</p>
                                            <SlArrowUp className={pass ? "rotate-180" : ""} />
                                        </div>
                                        {
                                            pass && <div className='p-3'>
                                                <p className='text-xl py-2'>Level of confidence on title history up to and after tokenization</p>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowUpCircle fontSize={24} className='text-[#80d0d3]' />     <p>Proof of Title Verified</p>
                                                </div>
                                                <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowDownCircle fontSize={24} className='text-[#ea4646]' />     <p>Claim in Token Matches Legal Description from County</p>
                                                </div>       <div className='flex items-center gap-x-3 py-1'>
                                                    <HiArrowDownCircle fontSize={24} className='text-[#ea4646]' />     <p>Holding Entity Matches Owner from County Assessor</p>
                                                </div>
                                            </div>
                                        }

                                    </div>


                                </div>
                                <br />
                                <div>
                                    <div className='bg-[#272626] text-white px-4 flex items-center gap-x-3 py-5'>
                                        <GoArrowSwitch fontSize={20} />   <p className='text-2xl'>Property History</p>
                                    </div>
                                    <div className='bg-[#131212] py-6 px-11 '>
                                        <div className='flex items-center my-4 gap-x-3'>
                                            <Image src={IconImg} className='rounded-full' />
                                            <div className='text-white'>
                                                <p className='text-md'>APN 174-783 Hyderabad ,Telangana was on-ramped to aasthi.ai 6 months ago</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='col-span-4 mr-16  flex flex-col justify-center items-center'>
                                {/* <div className='bg-[#131212] w-[100%]'>
                                    <Image src={Person} className='rounded-full' />
                                    <p className='text-[#DEBD6D] font-bold text-center text-2xl py-2'>aasthi.ai</p>
                                </div> */}
                                {/* <p className='text-xl font-medium text-white'>APN 074-142-22, Zayante, CA</p> */}
                            </div>
                        </div>
                    </div>
                        : <div className='col-span-12 lg:col-span-10 pt-16'>
                            <div className=' lg:mr-16'>
                                <LandMap />
                            </div>
                            <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center'>
                                <div onClick={() => setShow(!show)}>
                                    <BuyLandCard />
                                </div>
                            </div>
                        </div>
                }
                <br />
            </div>
        </div>
    )

}



export default Buyland