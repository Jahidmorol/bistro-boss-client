import React from "react";
import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${featured}")`,
      }}
      className=" my-20 bg-fixed"
    >
      <div className="bg-slate-500 bg-opacity-40 text-white">
        <div className="pt-8">
        <SectionTitle
          title="Featured Item"
          subTitle="chek it out"
        ></SectionTitle>
        </div>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featured} alt="featured-img" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline border-0 border-white text-white border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
