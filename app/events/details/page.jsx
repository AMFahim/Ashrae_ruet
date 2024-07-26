import Image from "next/image";
import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaWhatsapp } from "react-icons/fa";

const EventDetails = () => {
  return (
    <div className="max-w-[1920px] mx-auto mt-4">
      <div className="flex justify-center">
        <Image
          src={"https://i.ibb.co/sggJqCS/banner3.jpg"}
          width={1070}
          height={300}
          alt="banner"
        />
      </div>
      <h6 className="text-end mx-[135px] text-sm font-semibold">
        (From 12 March 2024 to 16 March 2024)
      </h6>
      <h3 className="text-center font-bold text-4xl mt-5">
        100% Verified Buy Verified WebMoney Accounts - 2024
      </h3>

      <h3 className="text-center font-bold text-2xl mt-2">
        Organized by Dev to Soft
      </h3>

      <div className="flex gap-3 justify-center my-5">
        <h2 className="font-semibold">Share with: </h2>
        <FaWhatsapp className="text-3xl" />
        <FaFacebook className="text-3xl" />
        <FaTwitter className="text-3xl" />
      </div>
      <h3 className="text-center font-semibold">100 People interested</h3>
      <div className="mx-[130px]">
        <h3 className="text-4xl font-bold mb-5 text-primary-text">
          About Event
        </h3>
        <p className="text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          at, omnis, quasi quos consectetur neque magni iste, facere obcaecati
          aliquam harum debitis sit praesentium repudiandae voluptatum quod
          perferendis. Doloremque quaerat voluptatum eum odio culpa beatae
          exercitationem nemo eaque saepe, nihil quos facilis in, aliquam
          laudantium quam ratione dolore blanditiis minima nam cumque assumenda,
          porro aut sequi? Facilis quas laudantium ipsa sint pariatur veritatis
          impedit nihil repellendus omnis debitis vero ad necessitatibus cum
          dolorem at ipsum libero excepturi, harum labore quaerat. At quos
          ducimus laudantium vel dolor facilis nisi, ad deserunt vitae harum
          aut? Unde, facere sequi totam tempore eligendi aperiam nam quia sit
          nobis corrupti aspernatur perferendis exercitationem, explicabo alias
          ducimus quis quod, recusandae cupiditate? Reprehenderit amet aliquam
          saepe laborum accusantium, iusto incidunt autem iste, sapiente
          asperiores quae dolorem enim labore cumque, tempora itaque modi. Eius
          expedita optio rerum magnam corrupti error consequatur dolore unde,
          voluptas delectus ducimus ipsam dolorem placeat impedit, praesentium
          amet quia a, quas similique nobis consequuntur perferendis dicta qui
          ex. Eveniet, quos voluptatum. Laboriosam voluptas at omnis molestiae
          voluptates amet in repellat eligendi consequuntur vel vero architecto
          quaerat, suscipit culpa illo maxime rerum ipsam. Numquam ducimus odio
          est qui voluptatibus velit dolores beatae officiis quam temporibus.
        </p>
      </div>

      <div className="mx-[130px]">
        <h2 className="text-4xl font-bold mb-2 text-primary-text mt-10">
          Event Location
        </h2>
        <p className="font-semibold">RUET Campus</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.443468246039!2d2.352154115240311!3d48.85663867492449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1636709631242!5m2!1sen!2sfr"
          width="600"
          height="450"
          className="w-full h-[300px] my-[20px] rounded-md"
          loading="lazy"
        ></iframe>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 text-center">
              Are you interested to join? Lets hit the interested button
            </h1>
            <button className="flex-shrink-0 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-10 sm:mt-0">
              Interested
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
