import Link from "next/link";

const HomeEvent = () => {
  return (
    <>
    <h1 className="mx-20 text-xl font-semibold py-5">Events</h1>
    <div className="flex flex-wrap">
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mb-4">
        <Link href="/events" className="block w-full h-full">
          <img
            alt="blog photo"
            src="https://i.ibb.co/sggJqCS/banner3.jpg"
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="mb-2 text-xl font-medium text-primary-text dark:text-white">
              Event Title
            </p>

            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi
              ipsa earum recusandae architecto iusto?
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #agency
              </div>
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mb-4">
        <Link href="/events" className="block w-full h-full">
          <img
            alt="blog photo"
            src="https://i.ibb.co/sggJqCS/banner3.jpg"
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="mb-2 text-xl font-medium text-primary-text dark:text-white">
              Event Title
            </p>

            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi
              ipsa earum recusandae architecto iusto?
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #agency
              </div>
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mb-4">
        <Link href="/events" className="block w-full h-full">
          <img
            alt="blog photo"
            src="https://i.ibb.co/sggJqCS/banner3.jpg"
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="mb-2 text-xl font-medium text-primary-text dark:text-white">
              Event Title
            </p>

            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi
              ipsa earum recusandae architecto iusto?
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #agency
              </div>
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomeEvent;
