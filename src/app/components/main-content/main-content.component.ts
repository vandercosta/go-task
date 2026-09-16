import { Component, OnInit } from '@angular/core';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';
import { TaskListSectionComponent } from '../task-list-section/task-list-section.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  imports: [WelcomeSectionComponent, TaskListSectionComponent],
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
