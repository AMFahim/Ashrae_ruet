"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const HomeGallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const images = [
    { src: "/image1.jpg", text: "Lorem ipsum dolor sit amet." },
    { src: "/image2.jpg", text: "Lorem ipsum dolor sit amet." },
    { src: "/image3.jpg", text: "Lorem ipsum dolor sit amet." },
    { src: "/image1.jpg", text: "Lorem ipsum dolor sit amet." },
    { src: "/image2.jpg", text: "Lorem ipsum dolor sit amet." },
    { src: "/image3.jpg", text: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <>
      <h1 className="mx-5 md:mx-16 text-2xl font-bold py-5">Gallery</h1>
      <div className="slider-container mx-5 md:mx-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Link href={"/gallery"} key={index} className="flex justify-center items-center p-2">
              <div className="w-[300px] h-[200px] relative">
                <Image
                  src={image.src}
                  alt={`banner ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-2 px-4 rounded-b-lg">
                  <p className="text-sm font-semibold">{image.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeGallery;
