import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  HVAC
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <Link href={"/events/details"} className="text-2xl font-medium text-gray-900 title-font mb-2">
                Innovations in HVAC&R Technology
                </Link>
                <p className="leading-relaxed">
                Join us for a comprehensive seminar on the latest innovations in HVAC&R technology. This event will feature leading experts discussing cutting-edge advancements, new research, and practical applications in the field.


                </p>
                <Link href={"/events/details"} className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  HVAC
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <Link href={"/events/details"} className="text-2xl font-medium text-gray-900 title-font mb-2">
                Sustainable HVAC Practices Workshop
                </Link>
                <p className="leading-relaxed">
                This hands-on workshop will focus on sustainable practices in HVAC. Participants will learn about energy-efficient technologies, sustainable design principles, and how to implement green practices in HVAC systems.
                </p>
                <Link href={"/events/details"} className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  HVAC
                </span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <Link href={"/events/details"} className="text-2xl font-medium text-gray-900 title-font mb-2">
                Career Paths in HVAC&R
                </Link>
                <p className="leading-relaxed">
                Explore the diverse career opportunities in the HVAC&R industry. This event will feature industry professionals sharing their career journeys, tips for success, and the skills needed to excel in this field.
                </p>
                <Link href={"/events/details"} className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
