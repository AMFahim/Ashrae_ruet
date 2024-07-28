"use client"
import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const page = ({ src, alt }) => {
  return (
   <div>
     <h1 className='text-xl text-center mt-5 font-semibold mx-5 md:mx-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, earum.</h1>
     <div className="image-viewer">
      <TransformWrapper
        defaultScale={1}
        wheel={{ step: 0.2 }}
        pinch={{ step: 0.2 }}
        doubleClick={{ step: 0.5 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* <div className="tools">
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={resetTransform}>Reset</button>
            </div> */}
            <TransformComponent>
              <img src={"/image1.jpg"} alt={alt} className="image" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      
    </div>
   
    <p className='mx-5 md:mx-20 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, odio magni. Adipisci nihil quisquam excepturi nemo molestias delectus debitis quam nulla quibusdam cum. Similique maxime fuga est incidunt asperiores commodi repudiandae eveniet blanditiis quibusdam at minima dolor ea culpa reiciendis exercitationem magnam aspernatur eum expedita quia, laudantium modi. Repudiandae quo corporis ducimus dolores ab facilis, labore ea tempora? Fuga repellendus officiis assumenda quia porro deserunt ut, laboriosam voluptatibus repellat alias est architecto voluptates. Ab exercitationem nisi officia labore voluptatibus! Earum facere nobis blanditiis ullam explicabo, eveniet voluptate, dolorum dolor tenetur quos vitae facilis reprehenderit quod molestiae, perferendis quas? Quam suscipit repellendus, recusandae, non a cupiditate sit molestiae tempora architecto iste voluptates accusamus adipisci autem ipsam quo nihil magni mollitia laborum facere perspiciatis dicta. Possimus ullam perferendis magni consequatur velit! Quidem unde magni tempore nulla molestiae? Labore repellendus accusantium nesciunt reiciendis illo corporis maiores nam, praesentium harum nisi voluptatem nihil iste sed itaque blanditiis fugiat amet. Ex debitis neque accusantium porro, tempora eum vitae dignissimos rerum eligendi incidunt ipsum voluptas quibusdam! Facilis praesentium error architecto, deleniti minima quo quod culpa porro eius tempore, ipsam obcaecati incidunt sed ducimus voluptatem velit voluptatum officiis laudantium repellendus! Nobis adipisci minus molestias, dignissimos veritatis a.</p>
   </div>
  );
};

export default page;
