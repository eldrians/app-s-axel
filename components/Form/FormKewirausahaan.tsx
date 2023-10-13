"use client";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastInfo } from "@/utils/toasts";
import { KewirausahaanHeaders } from "@/utils/achievementHeader"; // rubah

type MainFormProps = {
  dataMahasiswa: {
    namaLengkap: string;
    nim: string;
    email: string;
    urlSheet: string;
  };
};
const FormKompetisi = ({ dataMahasiswa }: MainFormProps) => {
  const [formData, setFormData] = useState({
    //dataPrestasi
    demandKey: "",
    urlPrestasi: "",

    //dataKompetisi
    namaUsaha: "",
    bidang: "",
    jumlahKaryawan: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Record<string, any> = {};
    KewirausahaanHeaders.forEach((header) => {
      // rubah
      if (header == "jenisPrestasi") {
        data[header] = "Kewirausahaan"; // rubah
      } else if (header == "namaLengkap") {
        data[header] = dataMahasiswa.namaLengkap;
      } else if (header == "nim") {
        data[header] = dataMahasiswa.nim;
      } else if (header == "email") {
        data[header] = dataMahasiswa.email;
      } else if (header == "urlSheet") {
        data[header] = dataMahasiswa.urlSheet;
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    try {
      const response = await fetch("/api/form/kewirausahaan", {
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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full flex gap-6 flex-col">
        <div className="grid grid-cols-2 gap-4 p-8 border border-greenApp rounded-lg">
          <InputText
            label="Nama Usaha"
            placeholder="ex: NEO Data Collection"
            id="namaUsaha"
            name="namaUsaha"
            value={formData.namaUsaha}
            onChange={handleInputChange}
          />
          <InputText
            label="Bidang Usaha"
            placeholder="ex: Data Management"
            id="bidang"
            name="bidang"
            value={formData.bidang}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Status Hukum"
            id="statusHukum"
            name="statusHukum"
            option={["Ya", "Tidak"]}
          />
          <InputText
            label="Jumlah Karyawan"
            placeholder="ex: 10 Orang"
            id="jumlahKaryawan"
            name="jumlahKaryawan"
            value={formData.jumlahKaryawan}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Status Usaha"
            id="statusUsaha"
            name="statusUsaha"
            option={["Aktif", "On-Going", "Tidak Aktif"]}
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

export default FormKompetisi;
