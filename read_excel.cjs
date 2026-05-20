const xlsx = require('xlsx');
const workbook = xlsx.readFile('Contact Information(Ecell Core &180DC core)(2).xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

const targets = ['Shivansh', 'Sudiksha', 'Sanket'];
const found = data.filter(row => {
  const name = Object.values(row).find(val => typeof val === 'string' && targets.some(t => val.toLowerCase().includes(t.toLowerCase())));
  return !!name;
});

console.log(JSON.stringify(found, null, 2));
