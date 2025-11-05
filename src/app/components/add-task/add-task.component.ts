import {Component, EventEmitter, Output} from '@angular/core';
import Task from '../../interfaces/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder!: boolean;

  @Output()
  private submitNewTaskEvent: EventEmitter<Task> = new EventEmitter();

  public submitForm(): void {
    console.log("AddTaskComponent.submitForm()")

    let newTask: Task = {
      id:  Math.round( Math.random()*100),
      text: this.text,
      day: new Date(this.day),
      reminder: this?.reminder? true : false
    }
    this.submitNewTaskEvent.emit(newTask);
  }
}
