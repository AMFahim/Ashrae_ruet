import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="mx-20">
        <h1 className="text-2xl font-bold pb-4">Meet Our team</h1>
      <div className="flex justify-between">
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">Advisor</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">Advisor</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">Advisor</span>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between my-8">
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">President</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">Vice President</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
                Fahim
              </span>
              <span className="text-xs text-gray-400">General Secretary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;