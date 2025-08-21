import { useState, memo, useCallback } from "react";
import { InlineText } from "@/ui/forms/InlineText/InlineText";
import { ServiceEditorContainer, ServiceItem, ServiceHeader, AddButton, RemoveButton } from "./ServiceEditor.style";
import {
  createNewService,
  updateServiceField,
  removeServiceById,
  createEditingKey,
  toggleEditingField,
  setEditingField
} from "./ServiceEditor.utils";

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServiceEditorProps {
  services: Service[];
  onUpdate: (services: Service[]) => void;
}

export const ServiceEditor = memo<ServiceEditorProps>(({
  services,
  onUpdate
}) => {
  const [editingFields, setEditingFields] = useState<Record<string, boolean>>({});

  const handleServiceUpdate = useCallback((serviceId: string, field: 'title' | 'description', value: string) => {
    const updatedServices = updateServiceField(services, serviceId, field, value);
    onUpdate(updatedServices);
    setEditingFields(prev => setEditingField(prev, createEditingKey(serviceId, field), false));
  }, [services, onUpdate]);

  const toggleEditing = useCallback((key: string) => {
    setEditingFields(prev => toggleEditingField(prev, key));
  }, []);

  const addService = useCallback(() => {
    const newService = createNewService();
    onUpdate([...services, newService]);
  }, [services, onUpdate]);

  const removeService = useCallback((serviceId: string) => {
    const updatedServices = removeServiceById(services, serviceId);
    onUpdate(updatedServices);
  }, [services, onUpdate]);

  const createRemoveHandler = useCallback((serviceId: string) => () => removeService(serviceId), [removeService]);

  const createServiceUpdateHandler = useCallback((serviceId: string, field: 'title' | 'description') => (newContent: string) => {
    handleServiceUpdate(serviceId, field, newContent);
  }, [handleServiceUpdate]);

  const createToggleEditingHandler = useCallback((serviceId: string, field: 'title' | 'description') => () => {
    toggleEditing(createEditingKey(serviceId, field));
  }, [toggleEditing]);

  return (
    <ServiceEditorContainer>
      {services.map((service, index) => (
        <ServiceItem key={service.id}>
          <ServiceHeader>
            <h4>Service {index + 1}</h4>
            <RemoveButton onClick={createRemoveHandler(service.id)}>
              Remove
            </RemoveButton>
          </ServiceHeader>
          
          <div>
            <label>Title</label>
            <InlineText
              content={service.title}
              onSave={createServiceUpdateHandler(service.id, 'title')}
              placeholder="Enter service title"
              isEditing={editingFields[createEditingKey(service.id, 'title')] || false}
              onEditToggle={createToggleEditingHandler(service.id, 'title')}
            />
          </div>
          
          <div>
            <label>Description</label>
            <InlineText
              content={service.description}
              onSave={createServiceUpdateHandler(service.id, 'description')}
              placeholder="Enter service description"
              isEditing={editingFields[createEditingKey(service.id, 'description')] || false}
              onEditToggle={createToggleEditingHandler(service.id, 'description')}
            />
          </div>
        </ServiceItem>
      ))}
      
      <AddButton onClick={addService}>
        Add Service
      </AddButton>
    </ServiceEditorContainer>
  );
});

ServiceEditor.displayName = "ServiceEditor";