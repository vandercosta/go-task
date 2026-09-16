import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list-section',
  templateUrl: './task-list-section.component.html',
  styleUrls: ['./task-list-section.component.css'],
  imports: [TaskCardComponent],
})
export class TaskListSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
