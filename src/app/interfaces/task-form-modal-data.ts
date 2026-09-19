import { ITaskFormControlls } from './task-form-controlls';

export interface ITaskFormModalData {
  mode: 'create' | 'edit';
  formValues: ITaskFormControlls;
}
