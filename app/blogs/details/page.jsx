import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap max-w-[1420px] mx-auto justify-center lg:flex-nowrap ml-20 lg:mx-auto gap-8">
      <main className="pt-8 w-2/3 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900  ">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900  "
                    >
                      Afride Ahsan
                    </a>
                    <p className="text-base text-gray-500    ">
                      Data scientist, educator 
                    </p>
                    <p className="text-base text-gray-500    ">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        June. 8, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl  ">
                Best practices for successful prototypes
              </h1>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ratione suscipit perferendis rerum repellendus dolorum tempora
              asperiores a ea laboriosam, reiciendis ipsam. Libero nemo
              inventore, quibusdam corrupti consequatur quaerat quo? Sint nemo
              soluta laudantium quaerat! Rerum fuga eaque quo aliquam illo,
              molestiae perspiciatis, veritatis consequuntur, impedit labore
              quae at? Sequi eveniet consequuntur tempore atque excepturi
              laboriosam itaque reiciendis, saepe magnam veritatis provident
              aperiam deleniti, dolor dolores nobis tenetur pariatur culpa
              asperiores obcaecati nostrum? Enim voluptatem quibusdam, iste
              labore cumque obcaecati ducimus libero natus suscipit magnam
              quaerat hic cupiditate laboriosam omnis eveniet eos blanditiis,
              recusandae impedit, quidem fugit! Eos, non commodi.
            </p>
            <figure>
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Getting started with Data</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              eligendi consequuntur laborum illum corporis earum iste, labore
              nulla eum, ducimus, facere delectus similique voluptatum eius
              magnam consectetur quis! Nobis eos dolore officia ducimus velit
              quisquam, possimus nihil? Dolorem omnis molestias minima hic
              voluptatem ratione porro illum optio quod inventore facilis
              corporis perspiciatis rerum at, officiis quisquam eveniet amet
              voluptate tempora tempore sint, asperiores debitis! Ad, autem!
              Asperiores distinctio expedita, alias consequuntur soluta
              cupiditate suscipit nihil repellendus est nemo harum recusandae
              facilis, consectetur at mollitia accusantium vel animi molestias,
              quam minima accusamus perspiciatis repudiandae sequi deleniti.
              Nihil voluptatum maiores non neque sit. Dolorum porro
              reprehenderit totam laboriosam in voluptates esse labore autem!
              Debitis quae quam, illo nobis a tempore beatae accusamus officiis
              maxime voluptatem neque iure dicta quidem facere, laboriosam
              omnis! Sed, voluptatem dolore eos est rem eaque? Nihil ducimus
              aliquam sint, eligendi minima nam mollitia. Reprehenderit ut
              delectus, dolore eaque eos quasi, distinctio praesentium adipisci
              assumenda dolor nesciunt voluptatem atque similique recusandae
              alias tempore earum esse suscipit obcaecati iusto, eum asperiores
              possimus? Consequatur voluptas ipsam id quia, earum illo delectus
              suscipit eligendi dolorem? Eum, iusto quos modi amet sequi ullam
              praesentium consequuntur recusandae aliquam iure tenetur possimus,
              consequatur dolorum nobis.
            </p>
            <ol>
              <li>
                <strong>Usability testing</strong>. Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live;
              </li>
              <li>
                <strong>Involving stakeholders</strong>. Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </li>
              <li>
                <strong>Impressing a client</strong>. Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </li>
              <li>
                <strong>Communicating your vision</strong>. By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              Let's start by including the CSS file inside the <code>head</code>{" "}
              tag of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classNameification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classNameified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
              alt=""
            />
            <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote>
              <p>
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>

            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </p>
          </article>
        </div>
      </main>

      <div className="w-1/3">
        <h1 className="text-3xl font-semibold mt-36 pb-2">Recent Blogs</h1>
        <div className="flex flex-col justify-start gap-2">
        <div className="bg-white shadow-lg mx-auto rounded-xl p-4">
            <Link href={"/blogs/details"}>
                <p className="text-gray-600 ">
                  <span className="text-lg font-bold text-indigo-500">“</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam porro quam debitis iste totam voluptatibus esse,
                  molestias odio ipsa. Quidem!
                  <span className="text-lg font-bold text-indigo-500">”</span>
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/team1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                      Mr. Abul Mia
                    </span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                      15.10.2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
        <div className="bg-white shadow-lg mx-auto rounded-xl p-4">
            <Link href={"/blogs/details"}>
                <p className="text-gray-600 ">
                  <span className="text-lg font-bold text-indigo-500">“</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam porro quam debitis iste totam voluptatibus esse,
                  molestias odio ipsa. Quidem!
                  <span className="text-lg font-bold text-indigo-500">”</span>
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/team1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                      Mr. Abul Mia
                    </span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                      15.10.2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
        <div className="bg-white shadow-lg mx-auto rounded-xl p-4">
            <Link href={"/blogs/details"}>
                <p className="text-gray-600 ">
                  <span className="text-lg font-bold text-indigo-500">“</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam porro quam debitis iste totam voluptatibus esse,
                  molestias odio ipsa. Quidem!
                  <span className="text-lg font-bold text-indigo-500">”</span>
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/team1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                      Mr. Abul Mia
                    </span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                      15.10.2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
        <div className="bg-white shadow-lg mx-auto rounded-xl p-4">
            <Link href={"/blogs/details"}>
                <p className="text-gray-600 ">
                  <span className="text-lg font-bold text-indigo-500">“</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam porro quam debitis iste totam voluptatibus esse,
                  molestias odio ipsa. Quidem!
                  <span className="text-lg font-bold text-indigo-500">”</span>
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/team1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                      Mr. Abul Mia
                    </span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                      15.10.2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
        <div className="bg-white shadow-lg mx-auto rounded-xl p-4">
            <Link href={"/blogs/details"}>
                <p className="text-gray-600 ">
                  <span className="text-lg font-bold text-indigo-500">“</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam porro quam debitis iste totam voluptatibus esse,
                  molestias odio ipsa. Quidem!
                  <span className="text-lg font-bold text-indigo-500">”</span>
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/team1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                      Mr. Abul Mia
                    </span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                      15.10.2024
                    </span>
                  </div>
                </div>
              </Link>
            </div>
        </div>
      </div>
      

      {/* <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50   ">
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900  ">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  className="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900  ">
                <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500    ">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read More
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900  ">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500    ">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read More
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900  ">
                <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500    ">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read More
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900  ">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500    ">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read More
              </a>
            </article>
          </div>
        </div>
      </aside> */}

     
    </div>
  );
};

export default page;
