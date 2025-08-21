import {
  createNewService,
  updateServiceField,
  removeServiceById,
  createEditingKey,
  toggleEditingField,
  setEditingField
} from "./ServiceEditor.utils";

describe("ServiceEditor Utils", () => {
  const mockServices = [
    { id: "1", title: "Service 1", description: "Description 1" },
    { id: "2", title: "Service 2", description: "Description 2" }
  ];

  describe("createNewService", () => {
    it("creates a new service with unique ID", () => {
      const newService = createNewService();
      
      expect(newService).toHaveProperty("id");
      expect(newService).toHaveProperty("title");
      expect(newService).toHaveProperty("description");
      expect(newService.title).toBe("New Service");
      expect(newService.description).toBe("Service description");
      expect(newService.id).toMatch(/^s\d+$/);
    });
  });

  describe("updateServiceField", () => {
    it("updates service title", () => {
      const updatedServices = updateServiceField(mockServices, "1", "title", "Updated Title");
      
      expect(updatedServices[0].title).toBe("Updated Title");
      expect(updatedServices[1]).toEqual(mockServices[1]);
    });

    it("updates service description", () => {
      const updatedServices = updateServiceField(mockServices, "2", "description", "Updated Description");
      
      expect(updatedServices[1].description).toBe("Updated Description");
      expect(updatedServices[0]).toEqual(mockServices[0]);
    });

    it("returns original array if service not found", () => {
      const updatedServices = updateServiceField(mockServices, "999", "title", "New Title");
      
      expect(updatedServices).toEqual(mockServices);
    });
  });

  describe("removeServiceById", () => {
    it("removes service by ID", () => {
      const updatedServices = removeServiceById(mockServices, "1");
      
      expect(updatedServices).toHaveLength(1);
      expect(updatedServices[0].id).toBe("2");
    });

    it("returns original array if service not found", () => {
      const updatedServices = removeServiceById(mockServices, "999");
      
      expect(updatedServices).toEqual(mockServices);
    });
  });

  describe("createEditingKey", () => {
    it("creates editing key for title field", () => {
      const key = createEditingKey("1", "title");
      
      expect(key).toBe("1-title");
    });

    it("creates editing key for description field", () => {
      const key = createEditingKey("2", "description");
      
      expect(key).toBe("2-description");
    });
  });

  describe("toggleEditingField", () => {
    it("toggles editing field from false to true", () => {
      const editingFields = { "1-title": false };
      const updated = toggleEditingField(editingFields, "1-title");
      
      expect(updated["1-title"]).toBe(true);
    });

    it("toggles editing field from true to false", () => {
      const editingFields = { "1-title": true };
      const updated = toggleEditingField(editingFields, "1-title");
      
      expect(updated["1-title"]).toBe(false);
    });

    it("creates new field if it doesn't exist", () => {
      const editingFields = {};
      const updated = toggleEditingField(editingFields, "new-field");
      
      expect(updated["new-field"]).toBe(true);
    });
  });

  describe("setEditingField", () => {
    it("sets editing field to specified value", () => {
      const editingFields = {};
      const updated = setEditingField(editingFields, "1-title", true);
      
      expect(updated["1-title"]).toBe(true);
    });

    it("overwrites existing field value", () => {
      const editingFields = { "1-title": true };
      const updated = setEditingField(editingFields, "1-title", false);
      
      expect(updated["1-title"]).toBe(false);
    });
  });
}); 