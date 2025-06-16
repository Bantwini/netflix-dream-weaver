
import { DeviceForm } from '@/components/DeviceForm';
import { DeviceTable } from '@/components/DeviceTable';
import { ExportButtons } from '@/components/ExportButtons';
import { useDevices } from '@/hooks/useDevices';

const Index = () => {
  const { devices, assignDevice, returnDevice } = useDevices();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Device Management System</h1>
        
        <DeviceForm 
          onAssignDevice={assignDevice}
          onReturnDevice={returnDevice}
        />
        
        <ExportButtons devices={devices} />
        
        <DeviceTable devices={devices} />
      </div>
    </div>
  );
};

export default Index;
