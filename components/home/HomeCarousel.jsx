"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

// import required modules
import Image from "next/image";

const HomeCarousel = () => {

  // React.useEffect(() => {
  //   swiper?.use(Autoplay);
  // }, [swiper]);

  return (
    <>
     <div>
     <div className="h-[350px] bg-cover">
        <Swiper
           spaceBetween={30}
           centeredSlides={true}
           loop={true}

           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           navigation={true}
           modules={[Autoplay,Navigation]}
        >
          <SwiperSlide className="h-[200px]">
            <Image
              src={"/image1.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-fit bg-cover "
              
            />
          </SwiperSlide>
          <SwiperSlide className="h-[200px]">
            <Image
              src={"/image2.jpg"}
              width={1000}
              height={300}
              alt="banner"
            />
          </SwiperSlide>
           <SwiperSlide className="h-[200px]">
            <Image
              src={"/image3.jpg"}
              width={1000}
              height={300}
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>
      </div>
     </div>
    </>
  );
};

export default HomeCarousel;