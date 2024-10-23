import { Component } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../models/plant.model';

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css']
})
export class PlantAddComponent {
  newPlant: Plant = {
    id: 0,
    name: '',
    species: '',
    plantedDate: new Date(),
    waterFrequency: '',
    sunlightNeeds: '',
    lastWatered: new Date(),
    isHealthy: true,
    imageName: ''
  };

  constructor(private plantService: PlantService) {}

  addPlant() {
    this.newPlant.id = Date.now(); // Générer un ID simple
    this.plantService.addPlant(this.newPlant).subscribe(response => {
      console.log('Plante ajoutée avec succès:', response);
      // Reset the form
      this.newPlant = { id: 0, name: '', species: '', plantedDate: new Date(), waterFrequency: '', sunlightNeeds: '', lastWatered: new Date(), isHealthy: true, imageName:'' };
    }, error => {
      console.error('Erreur lors de l\'ajout de la plante:', error);
    });
  }
}
