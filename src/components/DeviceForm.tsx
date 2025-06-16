
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface DeviceFormProps {
  onAssignDevice: (username: string, deviceType: string, serialNumber: string) => boolean;
  onReturnDevice: (serialNumber: string, username: string) => boolean;
}

export const DeviceForm = ({ onAssignDevice, onReturnDevice }: DeviceFormProps) => {
  const { toast } = useToast();
  const [assignForm, setAssignForm] = useState({
    username: '',
    deviceType: '',
    serialNumber: ''
  });
  const [returnForm, setReturnForm] = useState({
    username: '',
    serialNumber: ''
  });

  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onAssignDevice(assignForm.username, assignForm.deviceType, assignForm.serialNumber);
    
    if (success) {
      toast({
        title: "Device Assigned",
        description: "Device assigned and user registered in AD successfully."
      });
      setAssignForm({ username: '', deviceType: '', serialNumber: '' });
    } else {
      toast({
        title: "Assignment Failed",
        description: "User registration with AD failed.",
        variant: "destructive"
      });
    }
  };

  const handleReturn = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onReturnDevice(returnForm.serialNumber, returnForm.username);
    
    if (success) {
      toast({
        title: "Device Returned",
        description: "Device returned and user deregistered from AD successfully."
      });
      setReturnForm({ username: '', serialNumber: '' });
    } else {
      toast({
        title: "Return Failed",
        description: "Device not found or return failed.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Assign Device</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAssign} className="space-y-4">
            <div>
              <Label htmlFor="assign-username">Username</Label>
              <Input
                id="assign-username"
                value={assignForm.username}
                onChange={(e) => setAssignForm(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <Label htmlFor="device-type">Device Type</Label>
              <Input
                id="device-type"
                value={assignForm.deviceType}
                onChange={(e) => setAssignForm(prev => ({ ...prev, deviceType: e.target.value }))}
                placeholder="e.g., Laptop, Phone, Tablet"
                required
              />
            </div>
            <div>
              <Label htmlFor="assign-serial">Serial Number</Label>
              <Input
                id="assign-serial"
                value={assignForm.serialNumber}
                onChange={(e) => setAssignForm(prev => ({ ...prev, serialNumber: e.target.value }))}
                placeholder="Enter serial number"
                required
              />
            </div>
            <Button type="submit" className="w-full">Assign Device</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Return Device</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReturn} className="space-y-4">
            <div>
              <Label htmlFor="return-username">Username</Label>
              <Input
                id="return-username"
                value={returnForm.username}
                onChange={(e) => setReturnForm(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <Label htmlFor="return-serial">Serial Number</Label>
              <Input
                id="return-serial"
                value={returnForm.serialNumber}
                onChange={(e) => setReturnForm(prev => ({ ...prev, serialNumber: e.target.value }))}
                placeholder="Enter serial number"
                required
              />
            </div>
            <Button type="submit" variant="secondary" className="w-full">Return Device</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
