import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (
    <div>
      {/* Slider Section */}
      <div className='h-screen'>
      <Swiper
       modules={[Navigation]}
       spaceBetween={0}
       slidesPerView={2}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='h-[768px] w-full' src="/1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[768px] w-full' src="/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[768px] w-full' src="/3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[768px] w-full' src="/4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[768px] w-full' src="/5.jpg" alt="" />
      </SwiperSlide>


    </Swiper>
      </div>
    </div>
  );
};

export default Home;
