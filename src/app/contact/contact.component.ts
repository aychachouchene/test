import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  successMessage: boolean = false;

  onSubmit() {
    // Simuler l'envoi de formulaire
    setTimeout(() => {
      this.successMessage = true; // Affiche le message de succès
      this.resetForm(); // Réinitialise le formulaire après envoi
    }, 500); // Délai de 500ms pour simuler le temps d'envoi
  }

  resetForm() {
    this.successMessage = false;
    // Si tu veux réinitialiser les champs du formulaire,
    // tu devrais utiliser une approche plus complète avec Reactive Forms ou Template-driven Forms
  }
}
