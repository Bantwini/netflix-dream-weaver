
import { Device } from '@/types/device';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DeviceTableProps {
  devices: Device[];
}

export const DeviceTable = ({ devices }: DeviceTableProps) => {
  const getStatusColor = (status: Device['status']) => {
    switch (status) {
      case 'Assigned':
        return 'bg-green-500';
      case 'Returned':
        return 'bg-yellow-500';
      case 'Available':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device Type</TableHead>
              <TableHead>Serial Number</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Assigned Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No devices found
                </TableCell>
              </TableRow>
            ) : (
              devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell className="font-medium">{device.deviceType}</TableCell>
                  <TableCell>{device.serialNumber}</TableCell>
                  <TableCell>{device.assignedTo || 'N/A'}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(device.status)}>
                      {device.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {device.assignedDate ? device.assignedDate.toLocaleDateString() : ''}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
