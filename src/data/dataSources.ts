
export interface DataSource {
  id: string;
  name: string;
  url: string;
  dateAdded: string;
  type: 'Website' | 'File';
  status: 'Trained' | 'Yet To Start';
  count: number;
  active: boolean;
}

export const dataSources: DataSource[] = [
  {
    id: '1',
    name: 'Mindera Website',
    url: 'https://www.mindera.com',
    dateAdded: 'Apr 22, 2023 5:38 PM',
    type: 'Website',
    status: 'Trained',
    count: 61,
    active: true,
  },
  {
    id: '2',
    name: 'nuware',
    url: 'https://www.nuware.com',
    dateAdded: 'Apr 22, 2023 7:39 AM',
    type: 'Website',
    status: 'Trained',
    count: 117,
    active: false,
  },
  {
    id: '3',
    name: 'Report',
    url: 'Voucher_Report_Unknown (5).pdf',
    dateAdded: 'Apr 7, 2023 11:40 AM',
    type: 'File',
    status: 'Yet To Start',
    count: 1,
    active: false,
  },
  {
    id: '4',
    name: 'Barcodes cat',
    url: 'barcodes_catalog.pdf',
    dateAdded: 'Apr 5, 2023 3:15 PM',
    type: 'File',
    status: 'Yet To Start',
    count: 1,
    active: false,
  },
  {
    id: '5',
    name: 'Technical Docs',
    url: 'https://docs.technical.com',
    dateAdded: 'May 2, 2023 10:22 AM',
    type: 'Website',
    status: 'Trained',
    count: 83,
    active: false,
  },
  {
    id: '6',
    name: 'Annual Report 2023',
    url: 'Annual_Report_2023.pdf',
    dateAdded: 'May 10, 2023 2:15 PM',
    type: 'File',
    status: 'Yet To Start',
    count: 1,
    active: false,
  },
  {
    id: '7',
    name: 'Product Catalog',
    url: 'https://products.example.com',
    dateAdded: 'May 15, 2023 9:05 AM',
    type: 'Website',
    status: 'Trained',
    count: 152,
    active: false,
  },
  {
    id: '8',
    name: 'User Manual',
    url: 'User_Manual_v2.pdf',
    dateAdded: 'May 17, 2023 11:30 AM',
    type: 'File',
    status: 'Yet To Start',
    count: 1,
    active: false,
  },
  {
    id: '9',
    name: 'API Documentation',
    url: 'https://api.docs.example.com',
    dateAdded: 'May 18, 2023 4:45 PM',
    type: 'Website',
    status: 'Trained',
    count: 78,
    active: false,
  },
];
