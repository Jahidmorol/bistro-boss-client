import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero md:min-h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[50rem] bg-black opacity-50 py-16 ">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
