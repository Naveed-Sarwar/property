import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// // import styles from '@/styles/Home.module.css'
import { FiAlertCircle } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import PropertyCard from '@/components/propertyCard/PropertyCard';
import Property from '@/components/property/Property';
import ImgPopup from '@/components/imgPopup/ImgPopup';
import Img from "../../assets/one.jpg";
import ImgTwo from "../../assets/two.jpg";
import ImgThree from "../../assets/three.jpg";
import Tab from '@/components/tab/Tab'
import Chart from '@/components/chart/BarChart'
import BarChart from '@/components/chart/BarChart'
import Map from '@/components/map/Map'
import Link from 'next/link';
// import styles from "../styles/swiper-custom.css";
const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    const [open, setOpen] = useState(false);
    const [totalInvestment, setTotalInvestment] = useState(false);
    const [financing, setFinancing] = useState(false);
    const [loan, setLoan] = useState(false);
    const [amortization, setAmortization] = useState(true);
    const [revenue, setRevenue] = useState(false);
    const [expenses, setExpenses] = useState(false);
    return (
        <>
            <div className='mx-4  md:w-9/12 md:mx-auto'>
                <div className='grid gap-4 mt-6 grid-cols-2 md:grid-cols-12'>
                    <div className="md:col-span-7">
                        <Image onClick={() => setOpen(!open)} src={Img} className="cursor-pointer h-full rounded-[1rem]" />
                    </div>
                    <div className="md:col-span-5">
                        <Image onClick={() => setOpen(!open)} src={ImgTwo} className="cursor-pointer md:h-64  rounded-[1rem]" />
                        <br />
                        <Image onClick={() => setOpen(!open)} src={ImgThree} className="cursor-pointer md:h-64 rounded-[1rem]" />
                    </div>


                </div>
                {
                    open && <ImgPopup open={open} setOpen={setOpen} />

                }


                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex gap-2 mt-3 items-center'>
                            <p className='font-bold text-[#333333] text-[1.5rem] md:text-[2.25rem]'>$350,000</p>
                            <p className='bg-[#5FC65F] font-bold text-[0.875rem] h-6 px-2 rounded-xl text-white'>For Sale</p>
                        </div>
                        <p><span className='font-bold'>
                            367 W Clearview Ave,
                            State College, </span> PA 16803</p>
                    </div>
                    <div>
                        <FiHeart className='text-[#959595] h-6 w-6 md:h-9 md:w-9 ' />
                    </div>
                </div>
                <br />
                <hr />
                <div className='flex gap-3 md:gap-14  w-full justify-center py-4 items-center pr-4'>
                    <p><span className='font-extrabold'>5</span><span className='pl-1 text-[12px]'>bd</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div>
                    <p><span className='font-extrabold'>2.5</span><span className='pl-1 text-[12px]'>ba</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div>   <p><span className='font-extrabold'>2,544</span><span className='pl-1 text-[12px]'>sqft</span></p>
                    <div className='h-6 w-[2px] bg-[#ececec]'></div> <p className='text-[1rem]'>Townhome</p>
                </div>
                <hr />



                {/* <button className='mt-8 w-full text-center border-[1px] rounded-[0.375rem] font-medium text-[1.125rem] text-[#200955] leading-[1.75rem] hover:bg-slate-50 py-1 my-4'>Connnect with a local agent to learn about regulations</button> */}
                <br />
                <div className='flex gap-4'>

                    <p className='text-[#2e2e2e] pt-2 pb-5'>View property on</p>
                    <div className='flex gap-2'>
                      <Link target="_blank" href="https://www.redfin.com/PA/State-College/367-W-Clearview-Ave-16803/home/119393987">
                        <div className='bg-[red] border-[0.5px] border-black text-white h-10 font-bold text-[1.2rem] w-10 rounded-full  flex items-center justify-center'>R</div>
                        </Link>   <div className='bg-[purple] border-[0.5px] border-black text-white h-10 font-bold text-[1.2rem] w-10 rounded-full  flex items-center justify-center'>V</div>
                    </div>
                </div>
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Revenue Projection</p>
                <BarChart />
                <p className='text-center text-[#a9a9a9]'>Seasonalized based on a market RevPAN of $220</p>
                <br />
                <br />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Revenue</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1' />
                        </div>
                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>$14,414</span>/mo</p>
                    </div>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cap Rate</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>41%</span></p>
                    </div>
                    <div className='border-l-[4px] pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Gross Yeild</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>49.4%</span></p>
                    </div>
                    <div className='border-l-[4px] ]  pl-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cash on Cash</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>


                        <p className='text-[#200955]'><span className='font-bold text-[1.5rem] leading-[2rem]'>110.1%</span></p>
                    </div>
                </div>


                <br /> <br />
                <br />  <div className='border-[1px] rounded-[5px] ' >
                    <div className='flex px-4 py-4 justify-between'>
                        <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Calculator</p>
                        <button className='border-[1px] rounded-[5px] py-1 px-4'>Edit Preference</button>

                    </div>
                    <hr />
                    <br />
                    <div className='flex justify-evenly'>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cape Rate</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>41%</span></p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Gross Yeild</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>49.4%</span></p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0]'>Cash-on-cash</p>
                            <p className='text-[#200955]'><span className='font-bold text-[1.1rem] leading-[2rem]'>110.1%</span></p>
                        </div>
                    </div>
                    <br />
                    <hr />

                    <div onClick={() => setTotalInvestment(!totalInvestment)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Total Investment</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$379,750</p>
                            {
                                totalInvestment ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    {
                        totalInvestment && <>
                            <hr /><div className='px-4'>

                                <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                                    <div className='flex w-full flex-col pt-4'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Asking Price</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-4'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Purchase Price Factor</label>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Purchase Price</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex gap-1 items-center'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Clothing Costs</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />     </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Immediate Repairs</label>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Furnishing Costs</label>  <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='relative '>

                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>

                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Initial Expenses</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                    <hr />

                    <div onClick={() => setFinancing(!financing)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Financing</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$2,024/mo</p>
                            {
                                financing ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    <hr />
                    {financing && <><div className='px-4'>

                        <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                            <div>
                                <p className='text-[1.125rem] leading-[1.75rem] mt-3 text-[#a0a0a0]'>Financing Method</p>
                                <div className='grid grid-cols-2 gap-4'>
                                    <button onClick={() => setLoan(0)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${loan == 0 ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Loan</button>
                                    <button onClick={() => setLoan(1)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${loan == 1 ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Cash Only</button>
                                </div>
                                {
                                    loan == 0 && <>
                                        <p className='text-[1.125rem] leading-[1.75rem] mt-3 text-[#a0a0a0] pb-[0.5px]'>Loan Amount</p>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='459,400' className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Interest Rate</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        {
                                            amortization ? <> <div className='flex items-center gap-1 pt-3'>
                                                <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Amortization Term</label>
                                                <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                            </div>
                                                <div className='relative '>
                                                    <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                                </div>
                                            </> : <>
                                                <button className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 text-center w-full mt-6 hover:bg-[#f7f7f7]'>Get a free landing quote</button>
                                            </>}
                                    </>
                                }
                            </div>
                            <div>

                                {
                                    loan == 0 ? <>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Down Payment</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Loan Closing Costs</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <div className='flex items-center gap-1 pt-3'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Interest Type</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <button onClick={() => setAmortization(!amortization)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${amortization ? "bg-[#200955] text-white" : "bg-white hover:bg-[#f7f7f7] text-[#200955]"}`}>Amortization</button>
                                            <button onClick={() => setAmortization(!amortization)} className={`h-10 border-[1px] rounded-[5px] text-[1.125rem] leading-[1.75rem] border-solid   ${amortization ? "bg-white hover:bg-[#f7f7f7] text-[#200955]" : "bg-[#200955] text-white "}`}>Interest Only</button>
                                        </div>

                                    </> : <div className='mt-4'>
                                        <button className='border-[#e5e7eb] border-[1px] rounded-[5px] h-10 text-center w-full mt-6 hover:bg-[#f7f7f7]'>Get a free landing quote</button>
                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                        <hr />
                    </>}

                    <div onClick={() => setRevenue(!revenue)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Revenue</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$14,414/mo</p>
                            {
                                revenue ? <MdKeyboardArrowDown fontSize={20} /> : <MdKeyboardArrowRight fontSize={20} />
                            }
                        </div>
                    </div>
                    {
                        revenue && <> <hr />
                            <div className='px-4 pb-3'>
                                <div className='grid md:grid-cols-2 gap-x-8 '>
                                    <div>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>RevPAN</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input placeholder='459,400' className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <p className='text-[#a0a0a0] pt-3 text-[0.9rem]'>$230 is the projected RevPan based on comparable Airbnbs for this specific property, according to our Airbnb Calculator.</p>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Monthly Revenue</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='459,400' className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>

                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Other Income</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input placeholder='459,400' className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                        <p className='text-[#a0a0a0] pt-3 text-[0.9rem]'>$230 is the projected RevPan based on comparable Airbnbs for this specific property, according to our Airbnb Calculator.</p>
                                        <div className='flex items-center gap-1 pt-3 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Annual Revenue</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input disabled placeholder='459,400' className='placeholder:text-[#200955] border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    <hr />
                    <div onClick={() => setExpenses(!expenses)} className='flex cursor-pointer justify-between items-center px-4 py-2'>
                        <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Expenses</p>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$2,455/mo</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>

                    {
                        expenses && <>
                            <hr />  <div className='px-4'>

                                <div className='grid md:grid-cols-2 gap-x-8 pb-3'>
                                    <div className='flex w-full flex-col pt-4'>

                                        <div className='flex items-center gap-1  '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Channel Fees</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-4'>
                                        <div className='flex items-center gap-1 '>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Project Management Fee</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Supply Fees</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex gap-1 items-center'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Property Taxes</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />     </div>
                                        <div className='relative '>
                                            <p className='absolute right-2 top-1.5 text-[#200955] text-[1.2rem]'>%</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Insurance</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5 text-[#200955] text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>            <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>HOA Fees</label>  <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>

                                        <div className='relative '>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Utilities</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Maintenance</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='relative '>
                                            <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                            <input className=' border-[#e5e7eb] border-[1px] rounded-[5px] h-10 outline-none pl-6 w-full' />
                                        </div>
                                    </div>     <div className='flex w-full flex-col pt-3'>
                                        <div className='flex items-center gap-1'>
                                            <label className='text-[1.125rem] leading-[1.75rem] text-[#a0a0a0] pb-[0.5px]'>Other Expenses</label>
                                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='relative w-full '>
                                                <p className='absolute left-2 top-1.5  text-[1.2rem]'>$</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-l-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                            <div className='relative w-full '>
                                                <p className='absolute right-2 top-1.5  text-[1.2rem]'>%</p>
                                                <input className=' border-[#e5e7eb] border-[1px] rounded-r-[5px] h-10 outline-none pl-6 w-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                    <hr />
                    <br />
                    <div className='flex justify-between items-center px-4 py-2'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Upfront Equity</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1' />     </div>
                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$108,325</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-4 py-2'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Net Operating Income</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$143,504/yr - $11,959/mor</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 pt-2 pb-4'>

                        <div className='flex gap-1 items-center'>
                            <p className='text-[#200955] font-bold text-[1.1rem] leading-[2rem]'>Leveraged Net Cash Flow</p>
                            <FiAlertCircle className='text-[#a0a0a0] -mt-1 cursor-pointer' />
                        </div>

                        <div className='flex gap-0 text-[#232323] font-bold items-center'>
                            <p>$119,217/yr - $9,935/mo</p>
                            <MdKeyboardArrowRight fontSize={20} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Location</p>
                <br />

                <Map />
                <br />
                <br />
                <br />
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>Market Data</p>
                <p className='text-[#2e2e2e] pt-2 pb-5'>Performance of Airbnbs in the overall market for State College, PA 16803. Data displayed is not impacted by filters in this search.</p>
                <Tab />
                <button className=' w-full text-center border-[1px] rounded-[0.375rem] font-medium text-[1.125rem] text-[#200955] leading-[1.75rem] hover:bg-slate-50 py-1 my-4'>View more market data for State College</button>
                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955] py-8'>Nearby Airbnbs</p>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                </div>
                <br />

                <p className='font-bold text-[1.5rem] leading-[2rem] text-[#200955]'>For Sale in Centre County</p>
                <p className='text-[#2e2e2e] pt-2 pb-5'>Nearby properties for sale with positive cash-on-cash returns</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>
                <br /><br />
                <div className='bg-[#f8f7f7] rounded-[0.75rem] p-[1rem] md:p-[5rem]'>
                    <p className='font-bold text-[1.5rem] leading-[2rem] text-center text-[#200955] pb-10 md:pb-24'>Nearby Airbnbs for sale</p>

                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'>Centre County Airbnbs For Sale</p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'>State College Airbnbs For Sale</p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'>Pennsylvania Airbnbs For Sale</p>
                    <p className='text-[1.125rem] leading-[1.75rem] cursor-pointer hover:underline'>16803 Airbnbs For Sale</p>
                </div>
            </div>
        </>
    )
}