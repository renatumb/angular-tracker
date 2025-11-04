import {Component} from '@angular/core';

import Tasks from '../../Tasks';
import {mockTasks} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Tasks [] = mockTasks
}
