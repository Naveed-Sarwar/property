import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SlideOne from "../../../assets/slideOne.jpg";
import SlideTwo from "../../../assets/slideTwo.jpg";

import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { FiArrowDown } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import Arrow from "../../../assets/arrow.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
SwiperCore.use([Navigation]);

const SliderTwo = () => {

    return (
        <div className='relative rounded-t-[5px]  h-[300px]'>
            <Swiper
                slidesPerView={1}
                // navigation={{
                //     nextEl: '.custom-swiper-button-next',
                //     prevEl: '.custom-swiper-button-prev',
                // }}
                pagination={{ clickable: true }}
                loop
   className='w-[600px]'             

            >
          
                <SwiperSlide className='w-[500px]'>
                    <Image src={SlideOne} className='w-[500px]' />
                </SwiperSlide>
                <SwiperSlide className='w-[559px]'>
                    <Image src={SlideTwo}  />
                </SwiperSlide>

{/* 
                <div className="custom-swiper-button-next absolute cursor-pointer left-2 top-[25%] lg:top-[40%]  rounded-full z-10 w-14 h-14 p-3">
                    <Image src={ArrowLeft} />
                </div>
                <div className="custom-swiper-button-prev absolute cursor-pointer right-2 top-[25%] lg:top-[40%]  rounded-full z-10 w-14 h-14 p-3">
                    <Image src={Arrow} /> 

                </div> */}
            </Swiper>
        </div>
    );
};

export default SliderTwo;
