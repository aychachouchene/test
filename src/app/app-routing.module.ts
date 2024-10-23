import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantAddComponent } from './plant-add/plant-add.component';
import { PlantListComponent } from './plant-list/plant-list.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plant-add', component: PlantAddComponent },
  { path: 'plant-list', component: PlantListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers Home par défaut
  { path: '**', redirectTo: '/home' } // Gestion des routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
