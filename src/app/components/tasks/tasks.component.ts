import {Component, OnInit} from '@angular/core';

import Tasks from '../../Tasks';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks!: Tasks [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      taskData => this.tasks = taskData,
    );
  }
}
