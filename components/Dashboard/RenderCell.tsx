"use client";
import React, { useState } from "react";

import { ModalDashboard } from "@/components";

const SwitchKompetisi = (rows: any, columnKey: any, cellValue: any) => {
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
          <ModalDashboard icon="eye" data={rows} />
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

const SwitchKaryaIlmiah = (rows: any, columnKey: any, cellValue: any) => {};
const SwitchRekognisi = (rows: any, columnKey: any, cellValue: any) => {};
const SwitchPenobatan = (rows: any, columnKey: any, cellValue: any) => {};
const SwitchOrganisasi = (rows: any, columnKey: any, cellValue: any) => {};
const SwitchAksiKemanusiaan = (rows: any, columnKey: any, cellValue: any) => {};
const SwitchKewirausahaan = (rows: any, columnKey: any, cellValue: any) => {};

export {
  SwitchKompetisi,
  SwitchKaryaIlmiah,
  SwitchRekognisi,
  SwitchPenobatan,
  SwitchOrganisasi,
  SwitchAksiKemanusiaan,
  SwitchKewirausahaan,
};
