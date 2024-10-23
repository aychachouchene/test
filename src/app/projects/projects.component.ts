import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model'; 
import { Task } from '../models/task.model'; 
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []; // Liste des projets
  newProject: Project = { id: 0, name: '', description: '', tasks: [], progress: 0 };
  selectedProjectTasks: Task[] = []; // Tâches du projet sélectionné
  selectedProject: Project | null = null; // Projet actuellement sélectionné

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data; // Stocke les données dans la liste de projets
      },
      (error) => {
        console.error('Erreur lors de la récupération des projets', error);
      }
    );
  }

  addProject() {
    this.projectService.createProject(this.newProject).subscribe(
      (data) => {
        this.projects.push(data); // Ajoute le projet à la liste
        this.newProject = { id: 0, name: '', description: '', tasks: [], progress: 0 }; // Réinitialise le formulaire d'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du projet', error);
      }
    );
  }
  

  showTasks(project: Project) {
    this.selectedProject = project;
    this.selectedProjectTasks = project.tasks;
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(
      (data) => {
        const index = this.projects.findIndex(p => p.id === project.id);
        if (index !== -1) {
          this.projects[index] = data; // Met à jour le projet dans la liste
        }
        this.selectedProject = null; // Réinitialise le projet sélectionné après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du projet', error);
      }
    );
  }
  
  editProject(project: Project) {
    this.selectedProject = { ...project }; // Crée une copie du projet sélectionné pour éviter les modifications accidentelles
  }
  

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(
      () => {
        this.projects = this.projects.filter(project => project.id !== projectId); // Retire le projet de la liste
      },
      (error) => {
        console.error('Erreur lors de la suppression du projet', error);
      }
    );
  }
}
