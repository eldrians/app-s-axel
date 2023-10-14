"use client";
import { Button } from ".";
import { useState } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const email = target.elements.namedItem("email") as HTMLInputElement;

    const data = {
      email: email.value,
    };

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.info("Cek email-mu sekarang!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        throw new Error("HTTP error! status: " + response.status);
      }

      setEmail("");

      const responseData = await response.json();
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
      className="px-10 md:px-20 lg:px-28 2xl:px-72 pt-16 md:pt-20 lg:pt-20 bg-whiteApp"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full order-2 md:order-2 lg:order-1 relative">
          <div className="w-full h-full absolute z-0 justify-center items-center flex">
            <div
              className={` bg-gradient-to-tr from-purple-200 to-green-200  shadow-xl rounded-full  ${
                isFocused
                  ? "right-2 top-20 w-[200px] h-[200px]"
                  : "right-10 top-0 w-[250px] h-[250px]"
              } transform duration-700 absolute`}
            ></div>
            <div className="w-[600px] h-[300px] bg-gradient-to-r from-green-200 to-green-400 blur-3xl opacity-30 shadow-xl rounded-full right-1/2 -top-1/2"></div>
            <div
              className={` bg-gradient-to-tr from-green-200 to-purple-200 shadow-xl rounded-full  ${
                isFocused
                  ? "left-4 bottom-4 w-[150px] h-[150px]"
                  : "left-20 -bottom-8 w-[200px] h-[200px]"
              }  transform duration-700 absolute`}
            ></div>
          </div>
          <div className="relative py-12 md:py-12 lg:py-28 text-darkApp flex flex-col justify-center items-center z-20">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-center">
              Data{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-700  text-transparent bg-clip-text font-">
                Prestasi Kamu{" "}
              </span>
              Sekarang Juga !
            </h1>
            <p className="text-sm md:text-sm lg:text-lg font-medium my-4 lg:my-6 lg:w-4/6 text-center">
              Jangan biarkan prestasimu sia-sia, manfaatkan potensimu sepenuhnya
              dengan merinci dan mengatur pencatatan prestasimu secara
              sistematis
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-2 items-center justify-center w-full"
            >
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-6 bg-whiteApp border border-gray-300
                text-darkApp
                text-sm
                focus:outline-none
                focus:ring-[0.5px]
                focus:ring-greenApp
                rounded-xl w-full md:w-1/2 lg:w-1/2 shadow-xl"
                placeholder="Your Email..."
                required
                value={email}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <Button text="Get Email !" btnType="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
