"use client";
import React, { useState, useCallback, useMemo, ChangeEvent } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Button,
} from "@nextui-org/react";
import {
  SwitchAksiKemanusiaan,
  SwitchKompetisi,
  SwitchOrganisasi,
  SwitchPenobatan,
  SwitchRekognisi,
} from "./RenderCell";
import { SearchIcon } from "./Example/SearchIcon";
import { ChevronDownIcon } from "./Example/ChevronDownIcon";

type ColumnsProps = {
  key: string;
  label: string;
};

const TableComponent = ({
  columns,
  rows,
  jenisPrestasi,
}: {
  columns: ColumnsProps[];
  rows: any[];
  jenisPrestasi: string;
}) => {
  type Row = (typeof rows)[0];
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const hasSearchFilter = Boolean(filterValue);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "timestamp",
    direction: "ascending",
  });
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((row) =>
        row.nama.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [rows, filterValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Row, b: Row) => {
      const first = a[sortDescriptor.column as keyof Row] as number;
      const second = b[sortDescriptor.column as keyof Row] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {rows.length} users
          </span>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    onRowsPerPageChange,
    rows.length,
    hasSearchFilter,
  ]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  //rubah
  const renderCell = useCallback((rows: any, columnKey: any) => {
    const cellValue = rows[columnKey];
    if (jenisPrestasi == "kompetisi") {
      return SwitchKompetisi(rows, columnKey, cellValue, jenisPrestasi);
    } else if (jenisPrestasi == "rekognisi") {
      return SwitchRekognisi(rows, columnKey, cellValue, jenisPrestasi);
    } else if (jenisPrestasi == "penobatan") {
      return SwitchPenobatan(rows, columnKey, cellValue, jenisPrestasi);
    } else if (jenisPrestasi == "organisasi") {
      return SwitchOrganisasi(rows, columnKey, cellValue, jenisPrestasi);
    } else if (jenisPrestasi == "aksiKemanusiaan") {
      return SwitchAksiKemanusiaan(rows, columnKey, cellValue, jenisPrestasi);
    }
  }, []);
  return (
    <Table
      aria-label="table"
      topContent={topContent}
      topContentPlacement="outside"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
    >
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
      <TableBody items={sortedItems} emptyContent={"tidak ada data prestasi"}>
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
