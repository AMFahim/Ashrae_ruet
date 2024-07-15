"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HomeGallery = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
  ];

  return (
    <>
    <h1 className="mx-20 text-xl font-bold py-5">Gallery</h1>
      <div className="slider-container mx-20">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center p-2">
              <div className="w-[300px] h-[200px] relative">
                <Image
                  src={src}
                  alt={`banner ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeGallery;
