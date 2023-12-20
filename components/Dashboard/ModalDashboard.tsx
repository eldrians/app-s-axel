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

const ModalDashboard = ({
  icon,
  data,
  jenisPrestasi,
}: {
  icon: string;
  data?: any;
  jenisPrestasi?: string;
}) => {
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

  const HeaderModal = () => {
    const title = () => {
      if (data?.peran == "Lainnya") {
        return (
          <h1 className="text-2xl">
            {data?.demandKey} {data?.materi}
          </h1>
        );
      } else {
        return (
          <h1 className="text-2xl">
            {data?.peran} {data?.materi}
          </h1>
        );
      }
    };
    if (jenisPrestasi == "kompetisi") {
      return (
        <div>
          <h1 className="text-2xl">
            {data?.capaian} {data?.kategori}
          </h1>
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    } else if (jenisPrestasi == "rekognisi") {
      return (
        <div>
          {title()}
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    } else if (jenisPrestasi == "penobatan") {
      return (
        <div>
          <h1 className="text-2xl">
            {data?.tandaKehormatan} {data?.lembaga}
          </h1>
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    } else if (jenisPrestasi == "organisasi") {
      return (
        <div>
          <h1 className="text-2xl">
            {data?.jabatan} {data?.namaOrganisasi}
          </h1>
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    } else if (jenisPrestasi == "aksiKemanusiaan") {
      return (
        <div>
          <h1 className="text-2xl">
            {data?.peran} {data?.namaKegiatan}
          </h1>
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    } else if (jenisPrestasi == "kewirausahaan") {
      return (
        <div>
          <h1 className="text-2xl">{data?.namaUsaha}</h1>
          <div className="text-sm font-light text-darkApp">
            {data?.nama} | {data?.nim}
          </div>
        </div>
      );
    }
  };

  const TableBodyModal = () => {
    if (jenisPrestasi == "kompetisi") {
      return (
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
      );
    } else if (jenisPrestasi == "rekognisi") {
      return (
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
            <TableCell>Peran</TableCell>
            <TableCell>{data?.peran}</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Materi</TableCell>
            <TableCell>{data?.materi}</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>Nama Kegiatan</TableCell>
            <TableCell>{data?.namaKegiatan}</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>Jumlah Peserta</TableCell>
            <TableCell>{data?.jumlahPeserta}</TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>Tingkat</TableCell>
            <TableCell>{data?.tingkat}</TableCell>
          </TableRow>
          <TableRow key="9">
            <TableCell>Tahun</TableCell>
            <TableCell>{data?.tahun}</TableCell>
          </TableRow>
          <TableRow key="10">
            <TableCell>Timestamp</TableCell>
            <TableCell>{data?.timestamp}</TableCell>
          </TableRow>
        </TableBody>
      );
    } else if (jenisPrestasi == "penobatan") {
      return (
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
            <TableCell>Tanda Kehormatan</TableCell>
            <TableCell>{data?.tandaKehormatan}</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Lembaga</TableCell>
            <TableCell>{data?.lembaga}</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>Tingkat</TableCell>
            <TableCell>{data?.tingkat}</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>Timestamp</TableCell>
            <TableCell>{data?.timestamp}</TableCell>
          </TableRow>
        </TableBody>
      );
    } else if (jenisPrestasi == "organisasi") {
      return (
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
            <TableCell>Bidang</TableCell>
            <TableCell>{data?.bidang}</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Nama Organisasi</TableCell>
            <TableCell>{data?.namaOrganisasi}</TableCell>
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
      );
    } else if (jenisPrestasi == "aksiKemanusiaan") {
      return (
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
            <TableCell>Peran</TableCell>
            <TableCell>{data?.peran}</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Nama Kegiatan</TableCell>
            <TableCell>{data?.namaKegiatan}</TableCell>
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
      );
    } else if (jenisPrestasi == "kewirausahaan") {
      return (
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
            <TableCell>Bidang</TableCell>
            <TableCell>{data?.bidang}</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Status Hukum</TableCell>
            <TableCell>{data?.statusHukum}</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>Jumlah Karyawan</TableCell>
            <TableCell>{data?.jumlahKaryawan}</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>Tingkat</TableCell>
            <TableCell>{data?.tingkat}</TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>Timestamp</TableCell>
            <TableCell>{data?.timestamp}</TableCell>
          </TableRow>
        </TableBody>
      );
    } else {
      return (
        <TableBody>
          <TableRow key="1">
            <TableCell>ID Prestasi</TableCell>
            <TableCell>{data?.idPrestasi}</TableCell>
          </TableRow>
        </TableBody>
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
                {HeaderModal()}
              </ModalHeader>
              <ModalBody>
                <Table hideHeader aria-label="table">
                  <TableHeader>
                    <TableColumn>Header</TableColumn>
                    <TableColumn>Value</TableColumn>
                  </TableHeader>
                  {TableBodyModal()}
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
