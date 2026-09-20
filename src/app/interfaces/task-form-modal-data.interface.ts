import { ITaskFormControlls } from './task-form-controlls.interface';

export interface ITaskFormModalData {
  mode: 'create' | 'edit';
  formValues: ITaskFormControlls;
}
