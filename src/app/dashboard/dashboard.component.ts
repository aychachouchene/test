import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any = {
    title: 'Mon Dashboard',
    boxes: []
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.dashboardData.boxes = data.map(project => ({
        name: project.name,
        description: project.description
      }));
    });
  }
}
