import { Component, inject, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-section',
  templateUrl: './task-list-section.component.html',
  styleUrls: ['./task-list-section.component.css'],
  imports: [TaskCardComponent],
})
export class TaskListSectionComponent implements OnInit {
  private readonly _taskService = inject(TaskService);

  ngOnInit() {
    this._taskService.todoTasks.subscribe((tasks) => {
      console.log('Tarefas em A fazer:', tasks);
    });
  }
}
