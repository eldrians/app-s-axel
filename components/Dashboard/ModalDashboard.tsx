"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "@/components/Icon";

const ModalDashboard = ({ icon, data }: { icon: string; data?: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const iconButton = () => {
    if (icon == "eye") {
      return (
        <Tooltip content="Lihat">
          <Button size="sm" onPress={() => handleOpen()} color="primary">
            <EyeIcon />
          </Button>
        </Tooltip>
      );
    } else if (icon == "edit") {
      return <EditIcon />;
    } else if (icon == "delete") {
      return (
        <Tooltip content="Proses">
          <Button size="sm" onPress={() => handleOpen()} color="success">
            <DeleteIcon />
          </Button>
        </Tooltip>
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">{iconButton()}</div>
      <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-2xl">
                  {data?.capaian} {data?.kategori}
                </h1>
                <div className="text-sm font-light text-darkApp">
                  {data?.nama} | {data?.nim}
                </div>
              </ModalHeader>
              <ModalBody>
                <Table hideHeader aria-label="table">
                  <TableHeader>
                    <TableColumn>Header</TableColumn>
                    <TableColumn>Value</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>ID Prestasi</TableCell>
                      <TableCell>{data?.idPrestasi}</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Email</TableCell>
                      <TableCell>{data?.email}</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Demand Key</TableCell>
                      <TableCell>{data?.demandKey}</TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>Status Tim</TableCell>
                      <TableCell>{data?.statusTim}</TableCell>
                    </TableRow>
                    <TableRow key="5">
                      <TableCell>Nama Kompetisi</TableCell>
                      <TableCell>{data?.namaKompetisi}</TableCell>
                    </TableRow>
                    <TableRow key="6">
                      <TableCell>Tingkat</TableCell>
                      <TableCell>{data?.tingkat}</TableCell>
                    </TableRow>
                    <TableRow key="7">
                      <TableCell>Tahun</TableCell>
                      <TableCell>{data?.tahun}</TableCell>
                    </TableRow>
                    <TableRow key="8">
                      <TableCell>Timestamp</TableCell>
                      <TableCell>{data?.timestamp}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link href={data?.url} size="sm" target="_blank">
                  Lihat Data
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDashboard;
