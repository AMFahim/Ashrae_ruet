import BlogCards from "@/components/blogs/BlogCards";
import HomeBlogCards from "@/components/home/HomeBlogCards";
import HomeCarousel from "@/components/home/HomeCarousel";
import HomeEvent from "@/components/home/HomeEvent";
import HomeGallery from "@/components/home/HomeGallery";
import HomeNotice from "@/components/home/HomeNotice";
import OurServices from "@/components/home/OurServices";
import WelcomeRuetAshrae from "@/components/home/WelcomeRuetAshrae";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <marquee className="h-12 bg-gray-500 flex  items-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo
        quod, expedita maiores unde neque eum quis! Odit obcaecati excepturi
        voluptatibus dignissimos.
      </marquee>
      <div className=" max-w-[1420px] mx-auto">
        <WelcomeRuetAshrae />
        <div className="flex gap-3 justify-center  flex-wrap xl:flex-nowrap mx-5 w-full ">
          <div className="w-full md:w-[75%]">
            <HomeCarousel />
          </div>
          <div className="w-full md:w-3/4 shadow-md border">
            <HomeNotice />
          </div>
        </div>
        {/* <OurServices/> */}
        <HomeEvent />
       <HomeBlogCards/>
        <HomeGallery />
      </div>
    </main>
  );
}
