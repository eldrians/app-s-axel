"use client";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastInfo } from "@/utils/toasts";
import { RekognisiHeaders } from "@/utils/achievementHeader";

const FormRekognisi = () => {
  const [formData, setFormData] = useState({
    //dataMahasiswa
    namaLengkap: "",
    nim: "",
    email: "",
    urlSheet: "",

    //dataPrestasi
    demandKey: "",
    urlPrestasi: "",

    //dataRekognisi
    peran: "",
    materi: "",
    namaKegiatan: "",
    jumlahPeserta: "",
    tahun: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Record<string, any> = {};
    RekognisiHeaders.forEach((header) => {
      if (header == "jenisPrestasi") {
        data[header] = "Rekognisi";
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    try {
      const response = await fetch("/api/form/rekognisi", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(response);
        ToastInfo("Data Sudah Masuk");
      } else {
        throw new Error("HTTP error! status: " + response.status);
      }
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  return (
    <div className="w-full mt-12">
      <form onSubmit={handleSubmit} className="w-full flex gap-6 flex-col">
        <div className="w-full flex flex-col gap-6">
          <InputText
            label="Url Sheet"
            placeholder="Masukan URL Sheet anda..."
            id="urlSheet"
            name="urlSheet"
            // value={formData.urlSheet}
            value="https://docs.google.com/spreadsheets/d/1PGX--W4w-E8-TkqlYCDrWZF0K0VpVLE99QhCbeUjX5s/edit#gid=0"
            onChange={handleInputChange}
          />
          <div className="w-full grid grid-cols-3 gap-4">
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
        <div className="grid grid-cols-2 gap-4 p-8 border border-greenApp rounded-lg">
          <InputText
            label="Peran"
            placeholder="ex: Pemateri Seminar"
            id="peran"
            name="peran"
            value={formData.peran}
            onChange={handleInputChange}
          />
          <InputText
            label="Materi"
            placeholder="ex: Pentingya On-Demand System dalam sistem pendataan prestasi mahasiswa"
            id="materi"
            name="materi"
            value={formData.materi}
            onChange={handleInputChange}
          />
          <InputText
            label="Nama Kegiatan"
            placeholder="ex: Seminar Nasional"
            id="namaKegiatan"
            name="namaKegiatan"
            value={formData.namaKegiatan}
            onChange={handleInputChange}
          />
          <InputText
            label="Jumlah Peserta / Partisipan"
            placeholder="ex: 10 Orang"
            id="jumlahPeserta"
            name="jumlahPeserta"
            value={formData.jumlahPeserta}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Tingkat"
            id="tingkat"
            name="tingkat"
            option={[
              "International",
              "Regional",
              "Nasional",
              "Provinsi",
              "Perguruan Tinggi",
            ]}
          />
          <InputText
            label="Tahun"
            placeholder="ex: 2023"
            id="tahun"
            name="tahun"
            value={formData.tahun}
            onChange={handleInputChange}
          />
          <div className="col-span-2">
            <InputText
              label="URL"
              placeholder="ex: https://drive.google.com/drive/u/0/folders/xxx"
              id="urlPrestasi"
              name="urlPrestasi"
              value={formData.urlPrestasi}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <InputText
              label="Demand Key"
              placeholder="ex: blockchain; web application; public speaking"
              id="demandKey"
              name="demandKey"
              value={formData.demandKey}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button text="Submit !" btnType="submit" />
      </form>
    </div>
  );
};

export default FormRekognisi;
