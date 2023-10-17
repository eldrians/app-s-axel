"use client";
import { setCookie } from "cookies-next";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastError, ToastSuccess } from "@/utils/toasts";
import { PenobatanHeaders } from "@/utils/achievementHeader";

type MainFormProps = {
  dataMahasiswa: {
    namaLengkap: string;
    nim: string;
    email: string;
    urlSheet: string;
  };
};
const FormPenobatan = ({ dataMahasiswa }: MainFormProps) => {
  const [formData, setFormData] = useState({
    //dataPrestasi
    demandKey: "",
    urlPrestasi: "",

    //dataKompetisi
    tandaKehormatan: "",
    lembaga: "",
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
    PenobatanHeaders.forEach((header) => {
      // rubah
      if (header == "jenisPrestasi") {
        data[header] = "Penobatan"; // rubah
      } else if (header == "namaLengkap") {
        data[header] = dataMahasiswa.namaLengkap;
      } else if (header == "nim") {
        data[header] = dataMahasiswa.nim;
      } else if (header == "email") {
        data[header] = dataMahasiswa.email;
      } else if (header == "urlSheet") {
        data[header] = dataMahasiswa.urlSheet;
      }else if (header == "totalScore") {
        data[header] = 0;
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    try {
      const response = await fetch("/api/form/penobatan", {
        // rubah
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
          tandaKehormatan: "",
          lembaga: "",
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
            label="Tanda Kehormatan"
            placeholder="ex: Karyawan Magang Terbaik"
            id="tandaKehormatan"
            name="tandaKehormatan"
            value={formData.tandaKehormatan}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Tingkat"
            id="tingkat"
            name="tingkat"
            option={["Internasional", "Regional", "Nasional", "Provinsi"]}
          />
          <InputText
            label="Lembaga"
            placeholder="ex: PT.X Indonesia"
            id="lembaga"
            name="lembaga"
            value={formData.lembaga}
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
              placeholder="ex: web design"
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

export default FormPenobatan;
