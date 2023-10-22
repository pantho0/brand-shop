import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "../../Components/SingleBrand/SingleBrand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Brand = () => {
    const brand = useParams();
    const loadedProduct = useLoaderData();
    const [items, setItem] = useState([]);
    console.log(items);
    console.log(brand);

    useEffect(()=>{
      const currentBrand = loadedProduct.filter(item => item.brandName === brand.brandName)
      console.log(currentBrand);
      setItem(currentBrand)
    },[])


    return (
        <div>
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
              <img className="h-[65vh] w-full" src="/12.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[65vh] w-full" src="/13.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-[65vh] w-full" src="/14.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
        
        {/* ======= */}
        <div className="grid md:grid-cols-3 justify-between gap-4" >
            {
                items.map(item => <SingleBrand key={item.i} item={item}></SingleBrand>)
            }
        </div>
        </div>
    );
};

export default Brand;