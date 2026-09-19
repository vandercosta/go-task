import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent {
  private readonly _modalControllerService = inject(ModalControllerService);

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({
      name: 'Tarefa 1',
      description: 'Descrição da tarefa 1',
    });

    dialogRef.closed.subscribe((taskForm) => {
      if (taskForm) {
        console.log('Task form:', taskForm);
      }
    });
  }
}
