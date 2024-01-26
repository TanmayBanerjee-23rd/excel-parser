import xlsx from "xlsx";

let workbook = xlsx.readFile(process.argv[2]);

if (!workbook) {
  console.log("LOG_ERROR :: Not a valid Excel workbook ", process.argv[2]);
}

let sheetName = workbook.SheetNames[0];

let worksheet = workbook.Sheets[sheetName];

if (!worksheet) {
  console.log(
    "LOG_INFO",
    "In workbook " +
      process.argv[2] +
      " sheet " +
      sheetName +
      " is not available."
  );
}

const dataArray = xlsx.utils.sheet_to_json(worksheet);

const polishedDataArray: iRetailerSchema[] = [];

dataArray.forEach((row: any) => {
  let polishedDataItem: iRetailerSchema = {
    id: row.content_post_id,
    name: row.content_post_title || "UNKNOWN",
    nameSlug: row.content_post_slug || "UNKNOWN",
    contactInfo: {
      email: row.directory_contact__email || "UNKNOWN",
      phoneNumber: row.directory_contact__phone
        ? String(row.directory_contact__phone).replace(/[()]/g, "")
        : row.directory_contact__mobile
        ? String(row.directory_contact__mobile).replace(/[()]/g, "")
        : "UNKNOWN",
      website: row.directory_contact__website || "UNKNOWN",
      location: {
        lat: row.directory_location__lat || "UNKNOWN",
        lng: row.directory_location__lng || "UNKNOWN",
        address: row.directory_location__address || "UNKNOWN",
        street: row.directory_location__street || "UNKNOWN",
        city: row.directory_location__city || "UNKNOWN",
        state: row.directory_location__state || "UNKNOWN",
        country: row.directory_location__country || "UNKNOWN",
        zip: row.directory_location__zip || "UNKNOWN",
      },
    },
  };

  console.log(JSON.stringify(polishedDataItem), "\n");

  polishedDataArray.push(polishedDataItem);
});
