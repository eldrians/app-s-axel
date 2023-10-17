"use client";
import { setCookie } from "cookies-next";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastError, ToastSuccess } from "@/utils/toasts";
import { KaryaIlmiahHeaders } from "@/utils/achievementHeader";

type MainFormProps = {
  dataMahasiswa: {
    namaLengkap: string;
    nim: string;
    email: string;
    urlSheet: string;
  };
};
const FormKaryaIlmiah = ({ dataMahasiswa }: MainFormProps) => {
  const [formData, setFormData] = useState({
    //dataPrestasi
    demandKey: "",
    urlPrestasi: "",

    //dataKompetisi
    judul: "",
    kategori: "",
    dosenPembimbing: "",
    namaPenerbit: "",
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
    KaryaIlmiahHeaders.forEach((header) => {
      // rubah
      if (header == "jenisPrestasi") {
        data[header] = "Karya Ilmiah"; // rubah
      } else if (header == "namaLengkap") {
        data[header] = dataMahasiswa.namaLengkap;
      } else if (header == "nim") {
        data[header] = dataMahasiswa.nim;
      } else if (header == "email") {
        data[header] = dataMahasiswa.email;
      } else if (header == "urlSheet") {
        data[header] = dataMahasiswa.urlSheet;
      } else if (header == "totalScore") {
        data[header] = 0;
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    try {
      const response = await fetch("/api/form/karyaIlmiah", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      var info = await response.json();

      if (info.message == "done") {
        setFormData({
          demandKey: "",
          urlPrestasi: "",
          judul: "",
          kategori: "",
          dosenPembimbing: "",
          namaPenerbit: "",
          tahun: "",
        });
        ToastSuccess("Terimakasih data sudah masuk");
      } else {
        ToastError("Pastikan gsheet sudah di set PUBLIC dan EDITOR !");
      }
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full flex gap-6 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-8 border border-greenApp rounded-lg">
          <InputText
            label="Judul KTI"
            placeholder="ex: Penerapan On-Demand System Pada Sistem Pendataan Prestasi Mahasiswa"
            id="judul"
            name="judul"
            value={formData.judul}
            onChange={handleInputChange}
          />
          <InputText
            label="Kategori KTI"
            placeholder="ex: Teknologi"
            id="kategori"
            name="kategori"
            value={formData.kategori}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Status KTI"
            id="statusKTI"
            name="statusKTI"
            option={["Terbit", "Seminar", "Terbit & Seminar"]}
          />
          <InputDropdown
            label="Status Penulis"
            id="statusPenulis"
            name="statusPenulis"
            option={["Utama/Korespondensi", "Kedua, dst/non-korespondensi"]}
          />
          <InputText
            label="Dosen Pembimbing"
            placeholder="ex: Dr. Tuti Hastuti, M.T"
            id="dosenPembimbing"
            name="dosenPembimbing"
            value={formData.dosenPembimbing}
            onChange={handleInputChange}
          />
          <InputText
            label="Nama Penerbit / Penyelenggara"
            placeholder="ex: Jurnal Nasional Indonesia"
            id="namaPenerbit"
            name="namaPenerbit"
            value={formData.namaPenerbit}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Tingkat"
            id="tingkat"
            name="tingkat"
            option={["Internasional", "Nasional"]}
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
              placeholder="ex: Data Management; Bahasa Inggris"
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

export default FormKaryaIlmiah;
