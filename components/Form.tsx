"use client";
import React from "react";
import { Button } from ".";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [urlSheet, setUrlSheet] = useState("");
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [demandKey, setDemandKey] = useState("");
  const [capaian, setCapaian] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenis, setJenis] = useState("");
  const [kompetisi, setKompetisi] = useState("");
  const [tingkat, setTingkat] = useState("");
  const [tahun, setTahun] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const urlSheet = target.elements.namedItem("urlSheet") as HTMLInputElement;
    const id = target.elements.namedItem("id") as HTMLInputElement;
    const nama = target.elements.namedItem("nama") as HTMLInputElement;
    const nim = target.elements.namedItem("nim") as HTMLInputElement;
    const demandKey = target.elements.namedItem(
      "demandKey"
    ) as HTMLInputElement;
    const capaian = target.elements.namedItem("capaian") as HTMLInputElement;
    const kategori = target.elements.namedItem("kategori") as HTMLInputElement;
    const jenis = target.elements.namedItem("jenis") as HTMLInputElement;
    const kompetisi = target.elements.namedItem(
      "kompetisi"
    ) as HTMLInputElement;
    const tingkat = target.elements.namedItem("tingkat") as HTMLInputElement;
    const tahun = target.elements.namedItem("tahun") as HTMLInputElement;
    const url = target.elements.namedItem("url") as HTMLInputElement;

    const data = {
      urlSheet: urlSheet.value,
      id: id.value,
      name: nama.value,
      nim: nim.value,
      demandKey: demandKey.value,
      capaian: capaian.value,
      kategori: kategori.value,
      jenis: jenis.value,
      kompetisi: kompetisi.value,
      tingkat: tingkat.value,
      tahun: tahun.value,
      url: url.value,
    };

    try {
      const response = await fetch("/api/kompetisi", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(response);
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

      setUrlSheet("");
      setId("");
      setNama("");
      setNim("");
      setDemandKey("");
      setCapaian("");
      setKategori("");
      setJenis("");
      setKompetisi("");
      setTingkat("");
      setTahun("");
      setUrl("");
    } catch (error: any) {
      console.log("error " + error.message);
    }
  };

  const handleUrlSheetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlSheet(e.target.value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleNamaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };

  const handleNimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNim(e.target.value);
  };

  const handleDemandKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDemandKey(e.target.value);
  };

  const handleCapaianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapaian(e.target.value);
  };

  const handleKategoriChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKategori(e.target.value);
  };

  const handleJenisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJenis(e.target.value);
  };

  const handleKompetisiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKompetisi(e.target.value);
  };

  const handleTingkatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTingkat(e.target.value);
  };

  const handleTahunChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTahun(e.target.value);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="urlSheet"
            name="urlSheet"
            className="hidden"
            value="https://docs.google.com/spreadsheets/d/1PGX--W4w-E8-TkqlYCDrWZF0K0VpVLE99QhCbeUjX5s/edit#gid=516455500"
          />
          {/* <input
            type="urlSheet"
            id="urlSheet"
            name="urlSheet"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your URL Sheet..."
            required
            value={urlSheet}
            onChange={handleUrlSheetChange}
          /> */}
          <input
            type="text"
            id="id"
            name="id"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your ID..."
            required
            value={id}
            onChange={handleIdChange}
          />
          <input
            type="text"
            id="nama"
            name="nama"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Nama..."
            required
            value={nama}
            onChange={handleNamaChange}
          />
          <input
            type="text"
            id="nim"
            name="nim"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your NIM..."
            required
            value={nim}
            onChange={handleNimChange}
          />
          <input
            type="text"
            id="demandKey"
            name="demandKey"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Demand Key..."
            required
            value={demandKey}
            onChange={handleDemandKeyChange}
          />
          <input
            type="text"
            id="capaian"
            name="capaian"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Capaian..."
            required
            value={capaian}
            onChange={handleCapaianChange}
          />
          <input
            type="text"
            id="kategori"
            name="kategori"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Kategori..."
            required
            value={kategori}
            onChange={handleKategoriChange}
          />
          <input
            type="text"
            id="jenis"
            name="jenis"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Jenis..."
            required
            value={jenis}
            onChange={handleJenisChange}
          />
          <input
            type="text"
            id="kompetisi"
            name="kompetisi"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Kompetisi..."
            required
            value={kompetisi}
            onChange={handleKompetisiChange}
          />
          <input
            type="text"
            id="tingkat"
            name="tingkat"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Tingkat..."
            required
            value={tingkat}
            onChange={handleTingkatChange}
          />

          <input
            type="text"
            id="tahun"
            name="tahun"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your Tahun..."
            required
            value={tahun}
            onChange={handleTahunChange}
          />
          <input
            type="text"
            id="url"
            name="url"
            className="py-3 px-6 bg-whiteApp border border-gray-300
                    text-darkApp
                    text-sm
                    focus:outline-none
                    focus:ring-[0.5px]
                    focus:ring-greenApp
                    rounded-full w-full md:w-1/2 lg:w-1/2"
            placeholder="Your url..."
            required
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <Button text="Submit !" btnType="submit" />
      </form>
    </div>
  );
};

export default Form;
