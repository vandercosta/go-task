import { TaskStatusEnum } from '../enums/task-status.enum';

export type TaskStatus =
  | TaskStatusEnum.DOING
  | TaskStatusEnum.DONE
  | TaskStatusEnum.TODO;
