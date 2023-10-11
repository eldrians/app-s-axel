"use client";
import React from "react";
import { Button, InputText, InputDropdown } from "@/components";
import { useState } from "react";
import { ToastInfo } from "@/utils/toasts";
import { MinatDanBakatHeaders } from "@/utils/achievementHeader";

const FormMinatDanBakat = () => {
  const [formData, setFormData] = useState({
    urlSheet: "",
    nama: "",
    nim: "",
    demandKey: "",
    minatDanBakat: "",
    keahlian: "",
    url: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Record<string, any> = {};
    MinatDanBakatHeaders.forEach((header) => {
      if (header == "jenisPrestasi") {
        data[header] = "Minat dan Bakat";
      } else {
        const inputElement = e.currentTarget.elements.namedItem(
          header
        ) as HTMLInputElement;
        data[header] = inputElement.value;
      }
    });

    try {
      const response = await fetch("/api/minatDanBakat", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        ToastInfo("Data Sudah Masuk");
      } else {
        throw new Error("HTTP error! status: " + response.status);
      }
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            value="https://docs.google.com/spreadsheets/d/1PGX--W4w-E8-TkqlYCDrWZF0K0VpVLE99QhCbeUjX5s/edit#gid=0"
            onChange={handleInputChange}
          />
          <div className="w-full grid grid-cols-2 gap-4">
            <InputText
              label="Nama Lengkap"
              placeholder="ex: Axel Eldrian Hadiwibowo"
              id="nama"
              name="nama"
              value={formData.nama}
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
            label="Minat dan Bakat"
            placeholder="ex: Artificial Intelligence"
            id="minatDanBakat"
            name="minatDanBakat"
            value={formData.minatDanBakat}
            onChange={handleInputChange}
          />
          <InputDropdown
            label="Akademik / Non-Akademik"
            id="jenis"
            name="jenis"
            option={["Akademik", "Non Akademik"]}
          />
          <InputText
            label="Keahlian"
            placeholder="ex: Python;Machine Learning"
            id="keahlian"
            name="keahlian"
            value={formData.keahlian}
            onChange={handleInputChange}
          />

          <div className="col-span-2">
            <InputText
              label="URL"
              placeholder="ex: https://drive.google.com/drive/u/0/folders/xxx"
              id="url"
              name="url"
              value={formData.url}
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

export default FormMinatDanBakat;
