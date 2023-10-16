"use client";
import React, { useState } from "react";
import {
  FormKompetisi,
  FormKaryaIlmiah,
  FormRekognisi,
  FormPenobatan,
  FormOrganisasi,
  FormKewirausahaan,
  FormAksiKemanusiaan,
  FormMinatDanBakat,
} from ".";

type FormProps = {
  jenisPrestasi: string;
  dataMahasiswa: MainFormProps;
};

type MainFormProps = {
  namaLengkap: string;
  nim: string;
  email: string;
  urlSheet: string;
};
const Form = ({ jenisPrestasi, dataMahasiswa }: FormProps) => {
  let theForm = null;

  if (jenisPrestasi === "Kompetisi") {
    theForm = <FormKompetisi dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Karya Ilmiah") {
    theForm = <FormKaryaIlmiah dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Pengakuan") {
    theForm = <FormRekognisi dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Penghargaan") {
    theForm = <FormPenobatan dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Organisasi") {
    theForm = <FormOrganisasi dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Kewirausahaan") {
    theForm = <FormKewirausahaan dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Aksi Kemanusiaan") {
    theForm = <FormAksiKemanusiaan dataMahasiswa={dataMahasiswa} />;
  } else if (jenisPrestasi === "Minat dan Bakat") {
    theForm = <FormMinatDanBakat dataMahasiswa={dataMahasiswa} />;
  }
  return (
    <section
      id="form"
      className="px-10 md:px-20 lg:px-28 2xl:px-96 py-4 lg:py-12 bg-whiteApp flex flex-col justify-center items-center "
    >
      {theForm}
    </section>
  );
};

export default Form;
