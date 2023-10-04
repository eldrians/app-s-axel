"use client";
import { Button } from ".";
import { useState } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const [email, setEmail] = useState("");

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

  return (
    <section
      id="hero"
      className="px-10 md:px-20 lg:px-28 pt-4 lg:pt-20 bg-hero bg-cover bg-top"
    >
      <div className="w-full flex flex-col lg:flex-row items-center ">
        <div className="w-full md:w-full lg:w-3/5 order-2 md:order-2 lg:order-1">
          <div className="py-12 md:py-12 lg:py-28 text-whiteApp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left">
              Data prestasi kamu sekarang juga !
            </h1>
            <p className="text-sm md:text-sm lg:text-xl my-4 lg:my-8">
              jangan sampai prestasi kamu terbuang sia sia, maksimalkan potensi
              mu dengan mendata prestasi pada pada template on-demand service
              dibawah
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-row gap-2 items-center"
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
                rounded-full w-full md:w-1/2 lg:w-1/2"
                placeholder="Your Email..."
                required
                value={email}
                onChange={handleInputChange}
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
