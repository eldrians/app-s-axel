"use client";
import React, { useState } from "react";
import { Form, InputText } from ".";

const MainForm = () => {
  const [selectedButton, setSelectedButton] = useState("Kompetisi");
  const [formData, setFormData] = useState({
    //dataMahasiswa
    namaLengkap: "",
    nim: "",
    email: "",
    urlSheet:
      "https://docs.google.com/spreadsheets/d/1PGX--W4w-E8-TkqlYCDrWZF0K0VpVLE99QhCbeUjX5s/edit#gid=0",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };
  return (
    <div>
      <section
        id="main-form"
        className="px-6 md:px-20 lg:px-28 2xl:px-72 pt-12 lg:pt-20 bg-gradient-to-br from-darkGreenApp  to-greenApp flex flex-col justify-center items-center"
      >
        <div className="w-full mb-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-whiteApp uppercase">
            Masukan Data Mu
          </h1>
          <p className="text-whiteApp/60 mt-2 text-xs lg:text-sm w-full lg:w-1/2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fuga
            enim tenetur labore expedita officiis ullam excepturi sunt repellat
            necessitatibus?
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <div className="w-full flex flex-col gap-6 rounded-lg p-6 bg-whiteApp shadow-xl">
              <InputText
                label="Url Sheet"
                placeholder="Masukan URL Sheet anda..."
                id="urlSheet"
                name="urlSheet"
                // value={formData.urlSheet}
                value="https://docs.google.com/spreadsheets/d/1PGX--W4w-E8-TkqlYCDrWZF0K0VpVLE99QhCbeUjX5s/edit#gid=0"
                onChange={handleInputChange}
              />
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                <InputText
                  label="Nama Lengkap"
                  placeholder="ex: Axel Eldrian Hadiwibowo"
                  id="namaLengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                />
                <InputText
                  label="Email"
                  placeholder="ex: axel@upi.edu"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <InputText
                  label="NIM"
                  placeholder="ex: 2000352"
                  id="nim"
                  name="nim"
                  value={formData.nim}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex items-center text-right rounded-lg order-1 lg:order-2 bg-slate-400">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-whiteApp uppercase">
              A
            </h2>
          </div>
        </div>
        <div className="mt-12 lg:mt-20 overflow-x-scroll flex flex-row text-sm text-whiteApp w-full justify-center items-center">
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Kompetisi" ? "bg-whiteApp text-greenApp " : ""
            }`}
            onClick={() => handleButtonClick("Kompetisi")}
          >
            Kompetisi
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Karya Ilmiah"
                ? "bg-whiteApp text-greenApp"
                : ""
            }`}
            onClick={() => handleButtonClick("Karya Ilmiah")}
          >
            Karya Ilmiah
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Rekognisi" ? "bg-whiteApp text-greenApp" : ""
            }`}
            onClick={() => handleButtonClick("Rekognisi")}
          >
            Rekognisi
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Penobatan" ? "bg-whiteApp text-greenApp" : ""
            }`}
            onClick={() => handleButtonClick("Penobatan")}
          >
            Penobatan
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Organisasi" ? "bg-whiteApp text-greenApp" : ""
            }`}
            onClick={() => handleButtonClick("Organisasi")}
          >
            Organisasi
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Kewirausahaan"
                ? "bg-whiteApp text-greenApp"
                : ""
            }`}
            onClick={() => handleButtonClick("Kewirausahaan")}
          >
            Kewirausahaan
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Aksi Kemanusiaan"
                ? "bg-whiteApp text-greenApp"
                : ""
            }`}
            onClick={() => handleButtonClick("Aksi Kemanusiaan")}
          >
            Aksi Kemanusiaan
          </button>
          <button
            className={` py-2 px-4 rounded-t-lg ${
              selectedButton === "Minat dan Bakat"
                ? "bg-whiteApp text-greenApp"
                : ""
            }`}
            onClick={() => handleButtonClick("Minat dan Bakat")}
          >
            Minat dan Bakat
          </button>
        </div>
      </section>
      <Form jenisPrestasi={selectedButton} dataMahasiswa={formData} />
    </div>
  );
};

export default MainForm;
