
interface Service {
  id: string;
  title: string;
  description: string;
}

import { SERVICE_DEFAULTS, SERVICE_ID_PREFIX } from "./ServiceEditor.consts";

export const createNewService = (): Service => ({
  id: `${SERVICE_ID_PREFIX}${Date.now()}`,
  title: SERVICE_DEFAULTS.TITLE,
  description: SERVICE_DEFAULTS.DESCRIPTION
});

export const updateServiceField = (
  services: Service[],
  serviceId: string,
  field: 'title' | 'description',
  value: string
): Service[] => {
  return services.map(service =>
    service.id === serviceId
      ? { ...service, [field]: value }
      : service
  );
};

export const removeServiceById = (
  services: Service[],
  serviceId: string
): Service[] => {
  return services.filter(service => service.id !== serviceId);
};

export const createEditingKey = (serviceId: string, field: 'title' | 'description'): string => {
  return `${serviceId}-${field}`;
};

export const toggleEditingField = (
  editingFields: Record<string, boolean>,
  key: string
): Record<string, boolean> => {
  return { ...editingFields, [key]: !editingFields[key] };
};

export const setEditingField = (
  editingFields: Record<string, boolean>,
  key: string,
  value: boolean
): Record<string, boolean> => {
  return { ...editingFields, [key]: value };
}; 