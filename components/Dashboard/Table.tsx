"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

type ColumnsProps = {
  key: string;
  label: string;
};

// buat ini menjadi lebih reusable
// type RowsProps = {
//   idPrestasi: string;
//   nama: string;
//   demandKey: string;
//   capaian: string;
//   kategori: string;
//   namaKompetisi: string;
//   tingkat: string;
// };
const TableComponent = ({
  columns,
  rows,
}: {
  columns: ColumnsProps[];
  rows: any[];
}) => {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.idPrestasi}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
