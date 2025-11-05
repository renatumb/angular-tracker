import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();

  iconTimes: IconDefinition = faTimes;

  onDelete() {
    console.log("TaskItemComponent.onDelete() : " + JSON.stringify(this.task) );
    this.onDeleteTask.emit( this.task );
  }

  onUpdate() {
    console.log("TaskItemComponent.onUpdate(): " + JSON.stringify(this.task) );
    this.onToggleReminder.emit( this.task );
  }
}
