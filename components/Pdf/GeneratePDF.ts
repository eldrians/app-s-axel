import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
export const GeneratePDF = (
  type: string,
  dataKompetisi: any,
  dataKaryaIlmiah: any,
  dataRekognisi: any,
  dataPenobatan: any,
  dataOrganisasi: any,
  dataAksiKemanusiaan: any,
  dataKewirausahaan: any
) => {
  console.log(dataKompetisi);
  const doc = new jsPDF();

  let nama: any = "",
    email: any = "",
    nim: any = "";
  if (dataKompetisi.length > 0) {
    nama = dataKompetisi[0].nama;
    email = dataKompetisi[0].email;
    nim = dataKompetisi[0].nim;
  } else if (dataKaryaIlmiah.length > 0) {
    nama = dataKaryaIlmiah[0].nama;
    email = dataKaryaIlmiah[0].email;
    nim = dataKaryaIlmiah[0].nim;
  } else if (dataRekognisi.length > 0) {
    nama = dataRekognisi[0].nama;
    email = dataRekognisi[0].email;
    nim = dataRekognisi[0].nim;
  } else if (dataPenobatan.length > 0) {
    nama = dataPenobatan[0].nama;
    email = dataPenobatan[0].email;
    nim = dataPenobatan[0].nim;
  } else if (dataOrganisasi.length > 0) {
    nama = dataOrganisasi[0].nama;
    email = dataOrganisasi[0].email;
    nim = dataOrganisasi[0].nim;
  } else if (dataAksiKemanusiaan.length > 0) {
    nama = dataAksiKemanusiaan[0].nama;
    email = dataAksiKemanusiaan[0].email;
    nim = dataAksiKemanusiaan[0].nim;
  } else if (dataKewirausahaan.length > 0) {
    nama = dataKewirausahaan[0].nama;
    email = dataKewirausahaan[0].email;
    nim = dataKewirausahaan[0].nim;
  }

  // HEADER
  autoTable(doc, {
    head: [
      [
        {
          content: "KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN",
          styles: {
            halign: "center",
            font: "times",
            fontStyle: "bold",
            fontSize: 14,
            textColor: "#000",
            cellPadding: 0,
          },
        },
      ],
      [
        {
          content: "UNIVERSITAS PENDIDIKAN INDONESIA",
          styles: {
            halign: "center",
            font: "times",
            fontStyle: "bold",
            fontSize: 12,
            textColor: "#000",
            cellPadding: 0,
          },
        },
      ],
      [
        {
          content:
            "FAKULTAS PENDIDIKAN MATEMATIKA DAN ILMU PENGETAHUAN ALAM DEPARTEMEN PENDIDIKAN ILMU KOMPUTER",
          styles: {
            halign: "center",
            font: "times",
            fontStyle: "bold",
            fontSize: 12,
            textColor: "#000",
            cellPadding: 0,
          },
        },
      ],
    ],
    body: [
      [
        {
          content:
            "Jalan Dr. Setiabudi No. 229 Bandung 40154 Telp. 022-2007031 Ext 5308",
          styles: {
            halign: "center",
            font: "times",
            cellPadding: 0,
          },
        },
      ],
      [
        {
          content: "Website: http://cs.upi.ed Email: cs@upi.edu",
          styles: {
            halign: "center",
            font: "times",
            cellPadding: { bottom: 4 },
            lineWidth: { bottom: 0.5 },
            lineColor: "#000",
          },
        },
      ],
    ],
    theme: "plain",
    margin: { left: 20, right: 20 },
  });

  // BIODATA
  autoTable(doc, {
    head: [
      [
        {
          content: "Nama   :" + " " + nama,
          styles: {
            halign: "left",
            fontStyle: "normal",
            font: "times",
            fontSize: 10,
            cellPadding: 0,
          },
        },
      ],
      [
        {
          content: "\nNim      :" + " " + nim,
          styles: {
            halign: "left",
            fontStyle: "normal",
            font: "times",
            fontSize: 10,
            cellPadding: 0,
          },
        },
      ],
      [
        {
          content: "\nEmail   :" + " " + email,
          styles: {
            halign: "left",
            fontStyle: "normal",
            font: "times",
            fontSize: 10,
            cellPadding: 0,
          },
        },
      ],
    ],
    theme: "plain",
    margin: { left: 20, right: 20 },
  });

  if (dataKompetisi.length > 0) {
    // KOMPETISI
    autoTable(doc, {
      head: [
        [
          {
            content: "Kompetisi",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 4, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Capaian", dataKey: "capaian" },
        { header: "Kategori", dataKey: "kategori" },
        { header: "Tim", dataKey: "statusTim" },
        { header: "Kompetisi", dataKey: "namaKompetisi" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataKompetisi,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataKaryaIlmiah.length > 0) {
    // KARYA ILMIAH
    autoTable(doc, {
      head: [
        [
          {
            content: "Karya Ilmiah",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Judul", dataKey: "judul" },
        { header: "Jenis", dataKey: "jenisKTI" },
        { header: "Penerbit", dataKey: "namaPenerbit" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataKaryaIlmiah,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataRekognisi.length > 0) {
    // REKOGNISI
    autoTable(doc, {
      head: [
        [
          {
            content: "REKOGNISI",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Peran", dataKey: "peran" },
        { header: "Materi", dataKey: "materi" },
        { header: "Kegiatan", dataKey: "namaKegiatan" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataRekognisi,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataPenobatan.length > 0) {
    // PENOBATAN
    autoTable(doc, {
      head: [
        [
          {
            content: "PENOBATAN",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "ID", dataKey: "idPrestasi" },
        { header: "Tanda Kehormatan", dataKey: "tandaKehormatan" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Lembaga", dataKey: "lembaga" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataPenobatan,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataOrganisasi.length > 0) {
    // ORGANISASI
    autoTable(doc, {
      head: [
        [
          {
            content: "ORGANISASI",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Jabatan", dataKey: "jabatan" },
        { header: "Bidang", dataKey: "bidang" },
        { header: "Organisasi", dataKey: "namaOrganisasi" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataOrganisasi,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataAksiKemanusiaan.length > 0) {
    // AKSI KEMANUSIAAN
    autoTable(doc, {
      head: [
        [
          {
            content: "AKSI KEMANUSIAAN",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Peran", dataKey: "peran" },
        { header: "Nama Kegiatan", dataKey: "namaKegiatan" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataAksiKemanusiaan,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }
  if (dataKewirausahaan.length > 0) {
    // KEWIRAUSAHAAN
    autoTable(doc, {
      head: [
        [
          {
            content: "KEWIRAUSAHAAN",
            styles: {
              halign: "left",
              font: "times",
              fontStyle: "bold",
              fontSize: 12,
              textColor: "#000",
              cellPadding: { top: 2, bottom: 0 },
            },
          },
        ],
      ],
      theme: "plain",
      margin: { left: 20, right: 20 },
    });
    autoTable(doc, {
      columns: [
        { header: "Nama Usaha", dataKey: "namaUsaha" },
        { header: "Bidang", dataKey: "bidang" },
        { header: "Tingkat", dataKey: "tingkat" },
        { header: "Score", dataKey: "score" },
      ],
      body: dataKewirausahaan,
      theme: "striped",
      margin: { left: 20, right: 20 },
    });
  }

  let namaFile;

  if (type == "mahasiswa") {
    namaFile = nim + "_" + nama + "_Prestasi";
  } else {
    namaFile = "Data Prestasi";
  }

  return doc.save(namaFile);
};
