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
      <div>
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
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {brands.map((brand) => (
            <BrandCards key={brand.i} brand={brand}></BrandCards>
          ))}
        </div>

        <div>
          <div className="flex flex-col mt-4 md:flex-row items-center justify-center mt-4 gap-8">
            <img
              src="filler-image-3.jpg"
              className="max-w-sm rounded-full shadow-2xl"
            />
            <div>
              <h1 className="text-3xl text-center font-bold">
                PellentePellentesque vel seodales <br /> diam Nunc feugiat
                facilisis purus eu.
              </h1>
              <p className="py-6 text-center px-4 md:py-6 text-lg text-center">
                Suspendisse imperdiet libero euismod bibendum consequat.
                Phasellus impe rdiet sem neque, ac bibendum eros ultrices ut.
                Curabitur vel ultrices enim. Sed convallis mauris ac nibh
                lacinia efficitur. Phasellus vitae laoreet elit, ut tempor
                lectus. Etiam scelerisque justo nisi, a malesuada nisi.
              </p>
            </div>
          </div>
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
          <div className="flex flex-col mt-4 mb-4 md:flex-row items-center justify-center mt-4 mb-4 gap-8">
            <div>
              <h1 className="text-3xl text-center font-bold">
                Vel Seodales Pellente Sellentesque Diam Nunc Feugiat Facilisis
                Purus Eu.
              </h1>
              <p className="py-6 text-center px-4 md:py-6 text-lg text-center">
                Curabitur vel ultrices enim. Sed convallis mauris ac nibh
                lacinia efficitur. Phasellus vitae laoreet elit, ut tempor
                lectus. Etiam scelerisque justo nisi, a malesuada nisi.
                Suspendisse imperdiet libero euismod bibendum consequat.
                Phasellus impe rdiet sem neque, ac bibendum eros ultrices ut.
              </p>
            </div>
            <img
              src="filler-image-4.jpg"
              className="max-w-sm rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
