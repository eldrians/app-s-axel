"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { Button, Form, InputDropdown, InputText } from ".";

import { deleteCookie, setCookie, hasCookie, getCookie } from "cookies-next";
const ButtonPrestasi = ({
  selectedButton,
  title,
  onClick,
}: {
  selectedButton: string;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={` py-2 px-4 rounded-lg lg:rounded-none lg:rounded-t-lg ${
        selectedButton === title ? "bg-whiteApp text-greenApp" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
const MainForm = () => {
  const jenisPrestasi: string[] = [
    "Kompetisi",
    "Karya Ilmiah",
    "Pengakuan",
    "Penghargaan",
    "Organisasi",
    "Kewirausahaan",
    "Aksi Kemanusiaan",
    // "Minat dan Bakat",
  ];

  const [selectedButton, setSelectedButton] = useState("Kompetisi");
  const handleOptionChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    handleButtonClick(selectedValue);
  };
  const [formData, setFormData] = useState({
    //dataMahasiswa
    namaLengkap: "",
    nim: "",
    email: "",
    urlSheet: "",
  });

  useEffect(() => {
    if (
      hasCookie("urlSheet") &&
      hasCookie("namaLengkap") &&
      hasCookie("nim") &&
      hasCookie("email")
    ) {
      setFormData({
        urlSheet: getCookie("urlSheet") as string,
        namaLengkap: getCookie("namaLengkap") as string,
        nim: getCookie("nim") as string,
        email: getCookie("email") as string,
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="w-full h-full z-0 mb-20">
      <section
        id="main-form"
        className="w-full h-full z-10 px-6 md:px-20 lg:px-32 2xl:px-96 pt-12 lg:pt-20 bg-gradient-to-br from-darkGreenApp  to-green-400 flex flex-col justify-center items-center"
      >
        <div className="z-10">
          <div className="w-full mb-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-whiteApp uppercase">
              Masukan Data Mu
            </h1>
            <p className="text-whiteApp/80 mt-2 text-xs lg:text-sm w-full lg:w-2/3 ">
              Masukan URL Sheet Dokumen yang sudah kamu dapatkan sebelumnya,
              jika belum memiliki dokumen maka dapatkan dokumen
            </p>
            <a href="/dokumentasi" className="mt-2">
              <Button text="Dapatkan Dokumen" theme="secondary" />
            </a>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-4/5 order-2 lg:order-1">
              <div className="w-full flex flex-col gap-6 rounded-lg p-6 bg-whiteApp shadow-xl">
                <InputText
                  label="Url Sheet (dokumen khusus)"
                  placeholder="Masukan URL Sheet anda..."
                  id="urlSheet"
                  name="urlSheet"
                  value={formData.urlSheet}
                  onChange={handleInputChange}
                />
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <InputText
                    label="Nama Lengkap"
                    placeholder="ex: Alexandr Wang"
                    id="namaLengkap"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                  />
                  <InputText
                    label="Email"
                    type="email"
                    placeholder="ex: alex@upiedu"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <InputText
                    label="NIM"
                    placeholder="ex: 20012345"
                    id="nim"
                    name="nim"
                    value={formData.nim}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-20 w-full lg:hidden mb-4 px-4">
            <InputDropdown
              label="Jenis Prestasi"
              option={jenisPrestasi}
              onChange={handleOptionChange}
            />
          </div>
          <div className="mt-12 lg:mt-20 hidden lg:flex flex-row text-sm text-whiteApp w-full justify-center items-center">
            {jenisPrestasi.map((title, index) => (
              <ButtonPrestasi
                key={index}
                selectedButton={selectedButton}
                title={title}
                onClick={() => handleButtonClick(title)}
              />
            ))}
          </div>
        </div>
      </section>
      <Form jenisPrestasi={selectedButton} dataMahasiswa={formData} />
    </div>
  );
};

export default MainForm;
