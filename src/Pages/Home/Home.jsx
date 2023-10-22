import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLoaderData } from "react-router-dom";
import BrandCards from "../../Components/BrandCard/BrandCards";

const Home = () => {
  const brands = useLoaderData();
  return (
    <>
      <div >
        {/* Slider Section */}
        <div className="-z-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img className="h-[65vh] w-full" src="/slide21.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[65vh] w-full" src="/slide22.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[65vh] w-full" src="/slide23.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="mt-11">
        {/* Brands Section */}
        <h2 className="text-4xl text-center">Available Brands</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-20">
          {brands.map((brand) => (
            <BrandCards key={brand.i} brand={brand}></BrandCards>
          ))}
        </div>
        <div className="mt-20 text-center space-y-8 pt-10 pb-10 bg-black text-white">
          <h2 className="text-4xl">Sign Up For News Letter</h2>
          <p>
            Pulla tincidunt risam convallis itunu vatna bibendum. Sed estas,
            massa
          </p>
          <input
            type="text"
            placeholder="Enter Your Emai Here"
            className="input input-bordered input-md w-full max-w-xs text-black"
          />
          <button className="btn btn-outline btn-success ml-4">Sign Up</button>
        </div>
        <div>
          <div className="hero min-h-[60] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="filler-image-3.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  PellentePellentesque vel seodales diam Nunc feugiat facilisis
                  purus eu.
                </h1>
                <p className="py-6">
                  Suspendisse imperdiet libero euismod bibendum consequat.
                  Phasellus impe rdiet sem neque, ac bibendum eros ultrices ut.
                  Curabitur vel ultrices enim. Sed convallis mauris ac nibh
                  lacinia efficitur. Phasellus vitae laoreet elit, ut tempor
                  lectus. Etiam scelerisque justo nisi, a malesuada nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero min-h-[60vh]">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="filler-image-4.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Vel Seodales Pellente Sellentesque Diam Nunc Feugiat Facilisis Purus Eu.</h1>
                <p className="py-6">
                Curabitur vel ultrices enim. Sed convallis mauris ac nibh lacinia efficitur. Phasellus vitae laoreet elit, ut tempor lectus. Etiam scelerisque justo nisi, a malesuada nisi. Suspendisse imperdiet libero euismod bibendum consequat. Phasellus impe rdiet sem neque, ac bibendum eros ultrices ut.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
