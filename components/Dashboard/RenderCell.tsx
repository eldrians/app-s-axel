"use client";
import { FormEvent, useState } from "react";

import { Tooltip, Button } from "@nextui-org/react";
import { ModalDashboard } from "@/components";
import { DeleteIcon } from "../Icon";
import Link from "next/link";

const handleSubmit = async ({
  rows,
  jenisPrestasi,
  e,
}: {
  rows?: any;
  jenisPrestasi?: any;
  e: FormEvent<HTMLFormElement>;
}) => {
  e.preventDefault();

  // diganti jadi rows.email dalam implementasi aslinya
  const studentEmail = "eldrianaxel1@gmail.com";

  let data = {};
  if (jenisPrestasi == "kompetisi") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.capaian + " " + rows.namaKompetisi,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "karyaIlmiah") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.judul,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "rekognisi") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.peran + " " + rows.namaKegiatan,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "penobatan") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.tandaKehormatan + " " + rows.lembaga,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "organisasi") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.jabatan + " " + rows.namaOrganisasi,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "aksiKemanusiaan") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.peran + " " + rows.namaKegiatan,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  } else if (jenisPrestasi == "kewirausahaan") {
    data = {
      email: studentEmail,
      judulPrestasi: rows.namaUsaha,
      nama: rows.nama,
      jenis: jenisPrestasi,
    };
  }

  try {
    const response = await fetch("/api/notif", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.json());
  } catch (error: any) {
    console.log("error " + error.message);
  }
};

const SwitchKompetisi = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "capaian":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.kategori}
          </div>
        </div>
      );
    case "namaKompetisi":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            <div>
              {rows.tingkat} | {rows.tahun}
            </div>
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchKaryaIlmiah = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "judul":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.jenisKTI}
          </div>
        </div>
      );
    case "namaPenerbit":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            <div>
              {rows.tingkat} | {rows.tahun}
            </div>
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchRekognisi = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "peran":
      if (cellValue == "Lainnya") {
        return (
          <div className="flex flex-col">
            <div className="text-bold text-sm capitalize">{rows.demandKey}</div>
            <div className="text-bold text-sm capitalize text-default-400">
              {rows.materi}
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col">
            <div className="text-bold text-sm capitalize">{cellValue}</div>
            <div className="text-bold text-sm capitalize text-default-400">
              {rows.materi}
            </div>
          </div>
        );
      }

    case "namaKegiatan":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            <div>
              {rows.tingkat} | {rows.tahun}
            </div>
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchPenobatan = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "tandaKehormatan":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">
            {rows.tandaKehormatan}
          </div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.lembaga}
          </div>
        </div>
      );
    case "tingkat":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchOrganisasi = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "jabatan":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.bidang}
          </div>
        </div>
      );
    case "namaOrganisasi":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            <div>
              {rows.tingkat} | {rows.tahun}
            </div>
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchAksiKemanusiaan = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "peran":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.namaKegiatan}
          </div>
        </div>
      );
    case "tingkat":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            <div>{rows.tahun}</div>
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};
const SwitchKewirausahaan = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {
  switch (columnKey) {
    case "nama":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.nim}
          </div>
        </div>
      );
    case "namaUsaha":
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
          <div className="text-bold text-sm capitalize text-default-400">
            {rows.bidang}
          </div>
        </div>
      );
    case "action":
      return (
        <div className="relative flex items-center gap-2">
          <ModalDashboard
            icon="eye"
            data={rows}
            jenisPrestasi={jenisPrestasi}
          />
          <Tooltip content="Proses">
            <form onSubmit={(e) => handleSubmit({ rows, jenisPrestasi, e })}>
              <Button size="sm" color="success" type="submit">
                <DeleteIcon />
              </Button>
            </form>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <div className="text-bold text-sm capitalize">{cellValue}</div>
        </div>
      );
  }
};

export {
  SwitchKompetisi,
  SwitchKaryaIlmiah,
  SwitchRekognisi,
  SwitchPenobatan,
  SwitchOrganisasi,
  SwitchAksiKemanusiaan,
  SwitchKewirausahaan,
};
