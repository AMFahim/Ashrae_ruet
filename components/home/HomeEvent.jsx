import Link from "next/link";

const HomeEvent = () => {
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet.",
      img: "https://i.ibb.co/sggJqCS/banner3.jpg",
    },
  ];
  return (
    <>
      <h1 className="mx-5 md:mx-20 text-2xl font-bold py-5">Events</h1>
      <div className="">
        <div>
        <div className="flex flex-wrap">
  {events.map((event, index) => (
    <div
      key={index}
      className="m-auto overflow-hidden rounded-xl shadow-lg cursor-pointer h-90 w-60 md:w-80 mb-4"
    >
      <Link href="/events/details" className="block w-full h-full">
        <img
          alt="blog photo"
          src={event.img}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-gray-800">
          <p className="text-md font-normal text-primary-text text-white truncate">
            {event.title}
          </p>
        </div>
      </Link>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default HomeEvent;
