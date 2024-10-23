import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model'; // Assurez-vous d'importer votre modèle Plant
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api/plants'; // Mettez à jour l'URL de base pour les plantes

@Injectable({
  providedIn: 'root',
})
export class PlantService {
 
  constructor(private http: HttpClient) {}

  // getPlants - Récupérer toutes les plantes
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(BASE_URL);
  }

  // addPlant - Ajouter une nouvelle plante
  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(BASE_URL, plant);
  }

  // updatePlant - Mettre à jour une plante existante
  updatePlant(updatedPlant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${BASE_URL}/${updatedPlant.id}`, updatedPlant);
  }

  // deletePlant - Supprimer une plante par son ID
  deletePlant(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }
  
  // getPlantById - Récupérer une plante par son ID
  getPlantById(id: number): Observable<Plant> {
    return this.http.get<Plant>(`${BASE_URL}/${id}`);
  }
}
