"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { Button } from "..";
import Image from "next/image";

const EmailInfo = () => {
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
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <section className="w-full bg-slate-100 pt-16 pb-10" id="d-email">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end pr-0 lg:pr-12 pb-8 lg:pb-0">
          <Image
            src="/d-email.png"
            alt="Neo Data - Collection"
            width={400}
            height={200}
            className="rounded-xl shadow-xl border w-4/6 md:w-5/6 lg:w-3/5"
          />
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-2 px-10 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h3 className="text-3xl lg:text-4xl font-bold text-darkApp">
            <span className="text-greenApp font-extrabold">1 </span>Dapatkan
            Dokumen
          </h3>
          <p className="text-darkApp/80 text-xs md:text-sm lg:text-lg w-full md:w-5/6 lg:w-4/6 2xl:text-xl font-medium text-justify">
            Masukan <span className="font-bold text-darkApp">email</span>-mu
            pada kolom input dibawah, setelah itu kamu akan menerima email
            seperti pada gambar disamping
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row gap-2 items-center justify-start w-full mt-2 lg:mt-4"
          >
            <input
              type="email"
              id="email"
              name="email"
              className="py-2.5 lg:py-3 px-2 lg:px-6 bg-whiteApp border border-gray-300
                text-darkApp
                text-xs md:text-sm
                focus:outline-none
                focus:ring-[0.5px]
                focus:ring-greenApp
                rounded-xl w-4/6 md:w-1/2 lg:w-1/2 shadow-xl
                "
              placeholder="Masukan Email Mu..."
              required
              value={email}
              onChange={handleInputChange}
            />
            <Button text="Get Email!" btnType="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailInfo;
