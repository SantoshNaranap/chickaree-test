
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AuditEntry {
  id: number;
  changeType: string;
  changedBy: string;
  timestamp: string;
  description: string;
}

const AuditTable: React.FC = () => {
  const auditData: AuditEntry[] = [
    {
      id: 1,
      changeType: 'Update',
      changedBy: 'admin_user',
      timestamp: '2025-01-28T19:15:00Z',
      description: "Updated user roles for user 'johndoe'."
    },
    {
      id: 2,
      changeType: 'Add',
      changedBy: 'product_manager',
      timestamp: '2025-01-27T16:45:00Z',
      description: "Added a new product: 'Electric Bike Model X'."
    },
    {
      id: 3,
      changeType: 'Delete',
      changedBy: 'inventory_user',
      timestamp: '2025-01-27T14:20:00Z',
      description: "Removed outdated SKU: 'E-Bike-2021'."
    },
    {
      id: 4,
      changeType: 'Update',
      changedBy: 'order_admin',
      timestamp: '2025-01-26T09:00:00Z',
      description: "Changed order status for Order ID: '220512344'."
    }
  ];

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-oralia-light-gray">
            <TableHead className="text-white">ID</TableHead>
            <TableHead className="text-white">Change Type</TableHead>
            <TableHead className="text-white">Changed By</TableHead>
            <TableHead className="text-white">Timestamp</TableHead>
            <TableHead className="text-white">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {auditData.map((entry) => (
            <TableRow key={entry.id} className="border-oralia-light-gray">
              <TableCell className="font-medium">{entry.id}</TableCell>
              <TableCell>{entry.changeType}</TableCell>
              <TableCell>{entry.changedBy}</TableCell>
              <TableCell>{entry.timestamp}</TableCell>
              <TableCell>{entry.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AuditTable;
