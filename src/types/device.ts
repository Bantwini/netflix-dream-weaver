
export interface Device {
  id: string;
  deviceType: string;
  serialNumber: string;
  assignedTo?: string;
  assignedDate?: Date;
  status: 'Available' | 'Assigned' | 'Returned';
}

export interface UserEvent {
  id: string;
  username: string;
  eventType: 'Joiner' | 'Leaver';
  eventDate: Date;
}
