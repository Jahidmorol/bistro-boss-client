import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <SectionTitle
        title="Testimonials"
        subTitle="What Our Client Say"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 mb-10">
              <FaQuoteLeft className="text-7xl mb-5"/>
              <Rating
                className="text-5xl"
                placeholderRating={review.rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={
                  <FaStar className="text-orange-400"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
                readonly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-center text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
