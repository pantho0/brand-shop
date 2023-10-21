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
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img className="h-[768px] w-full" src="/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[768px] w-full" src="/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[768px] w-full" src="/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[768px] w-full" src="/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[768px] w-full" src="/5.jpg" alt="" />
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
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="filler-image-3.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
