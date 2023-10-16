"use client";
import { Button } from ".";
import { useState } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const [selectedButton, setSelectedButton] = useState("Home");
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <section
      id="hero"
      className=" z-40 px-10 md:px-20 lg:px-28 2xl:px-72 pt-16 md:pt-20 lg:pt-20 bg-whiteApp"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full 2xl:w-5/6 order-2 md:order-2 lg:order-1 relative">
          <div className="w-full h-full absolute z-0 justify-center items-center flex ">
            <div
              className={` bg-gradient-to-tr from-green-400 to-green-200  shadow-xl rounded-full  ${
                isFocused
                  ? "right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] blur-2xl opacity-20"
                  : "-right-32 lg:right-10 -top-10 lg:top-0 w-[170px] h-[170px] lg:w-[250px] lg:h-[250px]"
              } transform duration-700 absolute`}
            ></div>
            <div
              className={` bg-gradient-to-tr from-green-200 to-green-400 shadow-xl rounded-full  ${
                isFocused
                  ? "left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] blur-2xl opacity-20"
                  : "-left-28 lg:left-16 -bottom-6 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]"
              }  transform duration-700 absolute z-50`}
            ></div>
          </div>
          <div className="relative py-12 md:py-12 lg:py-28 text-darkApp flex flex-col justify-center items-center z-20">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold lg:font-medium text-center">
              Data{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-700  text-transparent bg-clip-text font-">
                Prestasi Kamu{" "}
              </span>
              Sekarang Juga !
            </h1>
            <p className="text-xs md:text-sm lg:text-lg font-medium my-4 lg:my-6 lg:w-4/6 text-center">
              Jangan biarkan prestasimu sia-sia, manfaatkan potensimu sepenuhnya
              dengan merinci dan mengatur pencatatan prestasimu secara
              sistematis
            </p>

            <div className="flex flex-row justify-center items-center gap-2">
              <a href="#main-form">
                <Button text="Isi Data Prestasimu !" />
              </a>
              <a href="/dokumentasi">
                <Button text="Setup !" btnType="submit" theme="secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
