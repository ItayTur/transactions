import { ExportToCsv } from 'export-to-csv';

const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Compressed Transactions',
    filename: 'Compressed Transactions',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
 
const csvExporter = new ExportToCsv(options);

export default csvExporter;