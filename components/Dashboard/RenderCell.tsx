"use client";
import React, { useState } from "react";

import { ModalDashboard } from "@/components";

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
          <ModalDashboard icon="delete" />
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
) => {};
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
          <ModalDashboard icon="delete" />
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
          <ModalDashboard icon="delete" />
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
) => {};
const SwitchAksiKemanusiaan = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {};
const SwitchKewirausahaan = (
  rows: any,
  columnKey: any,
  cellValue: any,
  jenisPrestasi: string
) => {};

export {
  SwitchKompetisi,
  SwitchKaryaIlmiah,
  SwitchRekognisi,
  SwitchPenobatan,
  SwitchOrganisasi,
  SwitchAksiKemanusiaan,
  SwitchKewirausahaan,
};
