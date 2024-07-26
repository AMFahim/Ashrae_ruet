import OurTeam from "@/components/about/OurTeam";
import TeamTable from "@/components/about/TeamTable";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover the Future of 
              <br class="hidden lg:inline-block" />
              HVAC&R with ASHRAE RUET!
            </h1>
            <p class="mb-8 leading-relaxed">
            Welcome to the ASHRAE RUET Branch! We are a dynamic student branch of the American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE) at the Rajshahi University of Engineering & Technology (RUET). Our branch is dedicated to advancing the arts and sciences of heating, ventilation, air conditioning, and refrigeration (HVAC&R) to serve humanity and promote a sustainable world.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                Join with Us
              </button>
              
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
            <Image 
            src={"/about.jpg"}
            width={500}
            height={500}
            className="object-cover object-center rounded"
            alt="about us"
            />
          </div>
        </div>
      </section>
      <OurTeam/>
      <TeamTable/>
    </div>
  );
};

export default page;
