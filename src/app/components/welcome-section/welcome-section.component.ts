import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
})
export class WelcomeSectionComponent {
  private readonly _modalControllerService = inject(ModalControllerService);

  openNewTaskModal() {
    const dialogRef = this._modalControllerService.openNewTaskModal();

    dialogRef.closed.subscribe((taskForm) => {
      if (taskForm) {
        console.log('Task form:', taskForm);
      }
    });
  }
}
