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
  const brands = useLoaderData()
  return (
      <>
      <div>
        {/* Slider Section */}
        <div >
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
          {
            brands.map(brand => <BrandCards key={brand.i} brand={brand}></BrandCards>)
          }
        </div>
      </div>
      </>

  );
};

export default Home;
