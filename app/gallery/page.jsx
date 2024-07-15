import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Ashrae RUET Gallery</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Here, we showcase the vibrant and dynamic activities of our student branch. From educational workshops and technical seminars to industry visits and community outreach programs, our gallery captures the essence of what it means to be a part of ASHRAE RUET.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
        <Image
              src={"/image2.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />

        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
              src={"/image2.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
              src={"/image1.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
        <Image
              src={"/image1.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
              src={"/image3.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
              src={"/image2.jpg"}
              width={1000}
              height={300}
              alt="banner"
              className="w-full object-cover h-full object-center block"
              
            />
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default page;