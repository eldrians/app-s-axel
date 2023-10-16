"use client";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastInfo } from "@/utils/toasts";
import { OrganisasiHeaders } from "@/utils/achievementHeader";
import { setCookie } from "cookies-next";

type MainFormProps = {
  dataMahasiswa: {
    namaLengkap: string;
    nim: string;
    email: string;
    urlSheet: string;
  };
};
const FormOrganisasi = ({ dataMahasiswa }: MainFormProps) => {
  const [formData, setFormData] = useState({
    //dataPrestasi
    demandKey: "",
    urlPrestasi: "",

    //dataKompetisi
    bidang: "",
    namaOrganisasi: "",
    tahun: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCookie("urlSheet", dataMahasiswa.urlSheet, {
      path: "/",
    });
    setCookie("namaLengkap", dataMahasiswa.namaLengkap, {
      path: "/",
    });
    setCookie("nim", dataMahasiswa.nim, {
      path: "/",
    });
    setCookie("email", dataMahasiswa.email, {
      path: "/",
    });
    const data: Record<string, any> = {};
    OrganisasiHeaders.forEach((header) => {
      // rubah
      if (header == "jenisPrestasi") {
        data[header] = "Organisasi"; // rubah
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
      const response = await fetch("/api/form/organisasi", {
        // rubah
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(response);
        setFormData({
          demandKey: "",
          urlPrestasi: "",
          bidang: "",
          namaOrganisasi: "",
          tahun: "",
        });
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-8 border border-greenApp rounded-lg">
          <InputDropdown
            label="Jabatan"
            id="jabatan"
            name="jabatan"
            option={[
              "Ketua",
              "Wakil Ketua",
              "Bendahara Umum",
              "Sekertaris Umum",
              "Ketua Divisi",
              "Ketua Biro",
            ]}
          />
          <InputText
            label="Bidang Organisasi"
            placeholder="ex: Politik"
            id="bidang"
            name="bidang"
            value={formData.bidang}
            onChange={handleInputChange}
          />
          <InputText
            label="Nama Organisasi"
            placeholder="ex: BEM KEMAKOM UPI"
            id="namaOrganisasi"
            name="namaOrganisasi"
            value={formData.namaOrganisasi}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Tingkat"
            id="tingkat"
            name="tingkat"
            option={[
              "Internasional",
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

          <div className="col-span-1 lg:col-span-2">
            <InputText
              label="URL"
              placeholder="ex: https://drive.google.com/drive/u/0/folders/xxx"
              id="urlPrestasi"
              name="urlPrestasi"
              value={formData.urlPrestasi}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <InputText
              label="Kata Kunci Prestasi Mu"
              placeholder="ex: kepemimpinan; public speaking"
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

export default FormOrganisasi;
