
import { useState, useEffect } from 'react';
import { Device, UserEvent } from '@/types/device';

export const useDevices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [userEvents, setUserEvents] = useState<UserEvent[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedDevices = localStorage.getItem('devices');
    const savedEvents = localStorage.getItem('userEvents');
    
    if (savedDevices) {
      setDevices(JSON.parse(savedDevices).map((d: any) => ({
        ...d,
        assignedDate: d.assignedDate ? new Date(d.assignedDate) : undefined
      })));
    }
    
    if (savedEvents) {
      setUserEvents(JSON.parse(savedEvents).map((e: any) => ({
        ...e,
        eventDate: new Date(e.eventDate)
      })));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('devices', JSON.stringify(devices));
  }, [devices]);

  useEffect(() => {
    localStorage.setItem('userEvents', JSON.stringify(userEvents));
  }, [userEvents]);

  const assignDevice = (username: string, deviceType: string, serialNumber: string) => {
    // Mock AD registration
    console.log(`[Mock AD] Registering user: ${username}`);
    
    const newDevice: Device = {
      id: Date.now().toString(),
      deviceType,
      serialNumber,
      assignedTo: username,
      assignedDate: new Date(),
      status: 'Assigned'
    };

    const newEvent: UserEvent = {
      id: Date.now().toString() + '_event',
      username,
      eventType: 'Joiner',
      eventDate: new Date()
    };

    setDevices(prev => [...prev, newDevice]);
    setUserEvents(prev => [...prev, newEvent]);
    return true;
  };

  const returnDevice = (serialNumber: string, username: string) => {
    const deviceIndex = devices.findIndex(d => 
      d.serialNumber === serialNumber && d.assignedTo === username
    );
    
    if (deviceIndex === -1) {
      return false;
    }

    // Mock AD deregistration
    console.log(`[Mock AD] Deregistering user: ${username}`);

    const updatedDevices = [...devices];
    updatedDevices[deviceIndex] = {
      ...updatedDevices[deviceIndex],
      status: 'Returned',
      assignedTo: undefined
    };

    const newEvent: UserEvent = {
      id: Date.now().toString() + '_event',
      username,
      eventType: 'Leaver',
      eventDate: new Date()
    };

    setDevices(updatedDevices);
    setUserEvents(prev => [...prev, newEvent]);
    return true;
  };

  return {
    devices,
    userEvents,
    assignDevice,
    returnDevice
  };
};
