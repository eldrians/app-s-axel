"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

type ColumnsProps = {
  key: string;
  label: string;
};

import { SwitchKompetisi } from "./RenderCell";

const TableComponent = ({
  columns,
  rows,
}: {
  columns: ColumnsProps[];
  rows: any[];
}) => {
  const renderCell = React.useCallback((rows: any, columnKey: any) => {
    const cellValue = rows[columnKey];

    return SwitchKompetisi(rows, columnKey, cellValue);
  }, []);
  return (
    <Table aria-label="table">
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
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
