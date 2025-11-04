import {Component, Input} from '@angular/core';
import Task from '../../interfaces/Tasks';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;

  iconTimes: IconDefinition = faTimes;
}
