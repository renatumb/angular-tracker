import {Component, OnInit} from '@angular/core';

import Task from '../../interfaces/Tasks';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks!: Task [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      taskData => this.tasks = taskData,
    );
  }

  public deleteTask(taskToDelete: Task) {
    console.log(taskToDelete);
    this.taskService.deleteTask(taskToDelete).subscribe(value => {
      // As soon as the 'http delete' returns,
      // the 'http get all' is called thus the remaining data is loaded and update the ui properly
      this.taskService.getTasks().subscribe(
        taskData => this.tasks = taskData,
      );
    });
  }
}
