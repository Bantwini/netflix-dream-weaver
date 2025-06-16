
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Device } from '@/types/device';

interface ExportButtonsProps {
  devices: Device[];
}

export const ExportButtons = ({ devices }: ExportButtonsProps) => {
  const exportToCSV = () => {
    const headers = ['Device Type', 'Serial Number', 'Assigned To', 'Status', 'Assigned Date'];
    const csvContent = [
      headers.join(','),
      ...devices.map(d => [
        d.deviceType,
        d.serialNumber,
        d.assignedTo || '',
        d.status,
        d.assignedDate ? d.assignedDate.toLocaleDateString() : ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'device_report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    // Simple text-based PDF export
    const content = [
      'Device Report',
      '=============',
      '',
      ...devices.map(d => 
        `${d.deviceType} - ${d.serialNumber} - ${d.assignedTo || 'N/A'} - ${d.status} - ${d.assignedDate ? d.assignedDate.toLocaleDateString() : ''}`
      )
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'device_report.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-4 mb-6">
      <Button onClick={exportToCSV} variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download CSV Report
      </Button>
      <Button onClick={exportToPDF} variant="outline">
        <FileText className="mr-2 h-4 w-4" />
        Download Report
      </Button>
    </div>
  );
};
