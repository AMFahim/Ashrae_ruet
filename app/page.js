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
      {/* classNameName="flex min-h-screen flex-col items-center justify-between p-24" */}

      <marquee className="h-12 bg-gray-500 flex items-center text-white mx-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo
        quod, expedita maiores unde neque eum quis! Odit obcaecati excepturi
        voluptatibus dignissimos.
      </marquee>
      <WelcomeRuetAshrae />
      <div className="flex gap-3 md:flex-wrap xl:flex-nowrap mx-20">
        <div className="w-[75%]">
        <HomeCarousel />
        </div>
        <div className="w-3/4 shadow-md border">
        <HomeNotice/>
        </div>
      </div>
      {/* <OurServices/> */}
      <HomeEvent/>

      <HomeGallery/>
      {/* <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get member</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">News and updates</button>
      </div>
    </div>
  </div>
</section> */}
    </main>
  );
}
