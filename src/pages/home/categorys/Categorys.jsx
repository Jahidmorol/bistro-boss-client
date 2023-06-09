import React from "react";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Categorys = () => {
  return (
    <div>
      <SectionTitle
        title="ORDER ONLINE"
        subTitle="From 11:00am to 10:00pm"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">soup</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="slidephoto" />
            <h2 className="text-4xl uppercase text-center -mt-16 text-white">soup</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorys;
