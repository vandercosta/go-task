import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModalComponent } from '../components/task-form-modal/task-form-modal.component';
import { TaskCommentsModalComponent } from '../components/task-comments-modal/task-comments-modal.component';
import { ITaskFormControlls } from '../interfaces/task-form-controlls.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalControllerService {
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };

  private readonly _dialog = inject(Dialog);

  openNewTaskModal() {
    return this._dialog.open<ITaskFormControlls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'create',
        formValues: {
          name: '',
          description: '',
        },
      },
    });
  }

  openEditTaskModal(formValues: ITaskFormControlls) {
    return this._dialog.open<ITaskFormControlls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: { mode: 'edit', formValues },
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open(TaskCommentsModalComponent, {
      ...this.modalSizeOptions,
    });
  }
}
