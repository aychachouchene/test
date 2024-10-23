export interface Plant {
    id: number;
    name: string;
    species: string;
    plantedDate: Date;
    waterFrequency: string; // ex: 'Daily', 'Weekly'
    sunlightNeeds: string;  // ex: 'Full Sun', 'Partial Shade'
    lastWatered: Date;
    isHealthy: boolean;
    imageName: string;
  }
  