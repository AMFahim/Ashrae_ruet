import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="mx-5 md:mx-20">
        <h1 className="text-2xl font-bold pb-4">Meet Our team</h1>

        <div className="flex justify-center mb-4">
        <div className="shadow-lg w-2/4 rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/advisormain.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-lg font-medium text-gray-600 dark:text-white">
              Dr. Md Rabiul Islam Sarker
              </span>
              <span className="text-xs text-gray-400">Advisor</span>
              <span className="text-xs text-gray-400">Refrigeration & Air Conditioning, Fluid Mechanics, and Solar Energy Engineering</span>
            </div>
          </div>
        </div>
        </div>
      <div className="flex justify-between gap-3 flex-wrap md:flex-nowrap">
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/developmentCommittee.jfif"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-md font-medium text-gray-600 dark:text-white">
                MD. Jafrul Hassan
              </span>
              <span className="text-xs text-gray-400">Development Committee Head</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"https://i.ibb.co.com/F587Vn7/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-md font-medium text-gray-600 dark:text-white">
                MD. Taqi Tajwar Mahmud
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
                  src={"/president.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-md font-medium text-gray-600 dark:text-white">
                MD. Humayun Kabir Jim
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
                  src={"https://i.ibb.co.com/F587Vn7/team1.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-md font-medium text-gray-600 dark:text-white">
                Ahanaf Zaman Zarif
              </span>
              <span className="text-xs text-gray-400">General Secretary </span>
            </div>
          </div>
        </div>
        <div className="shadow-lg w-[300px] rounded-xl bg-white border dark:bg-gray-800 p-4">
          <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <Image
                  alt="profil"
                  src={"/newsHead.jpg"}
                  height={200}
                  width={200}
                  className="mx-auto object-cover rounded-full h-32 w-32 "
                />
              </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-md font-medium text-gray-600 dark:text-white">
                Afride Ahsan
              </span>
              <span className="text-xs text-gray-400">News & Publication Head</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default OurTeam;
