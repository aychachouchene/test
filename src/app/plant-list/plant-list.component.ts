import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../models/plant.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  editingPlant: Plant | null = null; // Pour stocker la plante en cours de modification
@Input() plant!:Plant;
  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants() {
    this.plantService.getPlants().subscribe((data: Plant[]) => {
      this.plants = data;
    });
  }

  openEditForm(plant: Plant) {
    this.editingPlant = { ...plant }; // Créer une copie de la plante pour la modifier
  }

  closeEditForm() {
    this.editingPlant = null; // Fermer le formulaire de modification
  }

  updatePlant() {
    if (this.editingPlant) {
      this.plantService.updatePlant(this.editingPlant).subscribe(() => {
        this.loadPlants(); // Recharger les plantes après mise à jour
        this.closeEditForm(); // Fermer le formulaire
      });
    }
  }

  deletePlant(id: number) {
    this.plantService.deletePlant(id).subscribe(() => {
      this.loadPlants(); // Recharger les plantes après suppression
    });
  }
  getImageUrl(plant: Plant): string {
    if (!plant || !plant.imageName) {
        console.error('Image non trouvée pour la plante:', plant); // Log pour vérifier la plante
        return ''; // Retourner une chaîne vide si l'image n'existe pas
    }
    const imageUrl = `assets/plants/${plant.imageName}`; // Utilisez les backticks ici
    console.log('URL de l\'image:', imageUrl); // Log pour vérifier l'URL de l'image
    return imageUrl; 
}



}
