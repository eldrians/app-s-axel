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
  Tooltip,
  Divider,
} from "@nextui-org/react";

import { EyeIcon, EditIcon, DeleteIcon } from "@/components/Icon";

type ColumnsProps = {
  key: string;
  label: string;
};

const TableComponent = ({
  columns,
  rows,
}: {
  columns: ColumnsProps[];
  rows: any[];
}) => {
  const renderCell = React.useCallback((rows: any, columnKey: any) => {
    const cellValue = rows[columnKey];

    switch (columnKey) {
      case "nama":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.nim}
            </p>
          </div>
        );
      case "capaian":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {rows.kategori}
            </p>
          </div>
        );
      case "namaKompetisi":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              <div>
                {rows.tingkat} | {rows.tahun}
              </div>
            </p>
          </div>
        );
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <EyeIcon />
            </Tooltip>
            <Tooltip content="Edit user">
              <EditIcon />
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <DeleteIcon />
            </Tooltip>
          </div>
        );
      default:
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
    }
  }, []);
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.label === "Action" ? "center" : "start"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.idPrestasi}>
            {(columnKey) => (
              // <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
