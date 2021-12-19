const initialData = {
  tasks: {
    "plant-1": { id: "plant-1", content: "Ivy pothos" },
    "plant-2": { id: "plant-2", content: "Sundew" },
    "plant-3": { id: "plant-3", content: "Dracena" },
    "plant-4": { id: "plant-4", content: "ZZ plant" },
    "plant-5": { id: "plant-5", content: "Corn plant" },
    "plant-6": { id: "plant-6", content: "Moth orchid" },
    "plant-7": { id: "plant-7", content: "Prayer plant" },
    "plant-8": { id: "plant-8", content: "Croton" },
    "plant-9": { id: "plant-9", content: "Mojito mint" },
    "plant-10": { id: "plant-10", content: "Parsley" },
    "plant-11": { id: "plant-11", content: "Basil" },
    "plant-12": { id: "plant-12", content: "Starfish snake plant" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Living room",
      taskIds: ["plant-1", "plant-12", "plant-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Back patio",
      taskIds: ["plant-3", "plant-9", "plant-10", "plant-11"]
    },
    "column-3": {
      id: "column-3",
      title: "Kitchen",
      taskIds: ["plant-6", "plant-2"]
    },
    "column-4": {
      id: "column-4",
      title: "Front porch",
      taskIds: ["plant-7", "plant-8", "plant-5"]
    }
  },
  // Facilitates the reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};

export default initialData;
