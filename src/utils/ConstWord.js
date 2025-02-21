export const Phasa = [
  {
    label: "R, S, T",
    value: "R, S, T",
  },
  {
    label: "R",
    value: "R",
  },
  {
    label: "S",
    value: "S",
  },
  {
    label: "T",
    value: "T",
  },
  {
    label: "N",
    value: "N",
  },
  {
    label: "R, T",
    value: "R, S",
  },
  {
    label: "S, T",
    value: "S, T",
  },
  {
    label: "-",
    value: "-",
  },
];

export const KategoriAnomali = [
  {
    label: "Rembesan",
    value: "Rembesan",
  },
  {
    label: "IL3 (Hasil Uji)",
    value: "IL3 (Hasil Uji)",
  },
  {
    label: "PMT/PMS Macet",
    value: "PMT/PMS Macet",
  },
  {
    label: "Arus Bocor",
    value: "Arus Bocor",
  },
  {
    label: "Hotspot",
    value: "Hotspot",
  },
  {
    label: "Kebocoran",
    value: "Kebocoran",
  },
  {
    label: "AC/DC",
    value: "AC/DC",
  },
  {
    label: "Control",
    value: "Control",
  },
  {
    label: "DFR/TWS",
    value: "DFR/TWS",
  },
  {
    label: "Indikasi",
    value: "Indikasi",
  },
  {
    label: "Meter",
    value: "Meter",
  },
  {
    label: "Rele",
    value: "Rele",
  },
  {
    label: "Lainnya",
    value: "Lainnya",
  },
];

export const Pelaksana = [
  {
    label: "ULTG",
    value: "ULTG",
  },
  {
    label: "Vendor",
    value: "Vendor",
  },
  {
    label: "PDKB",
    value: "PDKB",
  },
  {
    label: "Pihak Ketiga",
    value: "Pihak Ketiga",
  },
];

export const getColor = (value) => {
  switch (value) {
    // PHASA
    case "R, S, T":
      return "brown";
    case "R":
      return "red";
    case "S":
      return "yellow";
    case "T":
      return "blue";
    case "N":
      return "gray";
    case "R, T":
      return "green";
    case "R, S":
      return "orange";
    case "S, T":
      return "lime";
    case "-":
      return "purple";

    // Kategori Anomali
    case "Rembesan":
      return "red";
    case "IL3 (Hasil Uji)":
      return "lime";
    case "PMT/PMS Macet":
      return "gray";
    case "Arus Bocor":
      return "light-green";
    case "Hotspot":
      return "blue";
    case "Kebocoran":
      return "purple";

    default:
      return "blue-gray";
  }
};

export const TABS = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "CLOSE",
    value: "CLOSE",
  },
  {
    label: "OPEN",
    value: "OPEN",
  },
];
