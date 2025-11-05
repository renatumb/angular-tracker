import {Component} from '@angular/core';
import {UiServiceService} from '../../services/uiService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public showAddTask: boolean = false;

  constructor(private uiService: UiServiceService) {
    this.uiService.onToggleAddTaskComponent().subscribe(
      value => {
        this.showAddTask = value;
        console.log("HeaderComponent.constructor --> uiService.onToggleAddTaskComponent() :" + value );
      }
    );
  }

  toggleAddTask() {
    this.uiService.toggleAddTaskComponent();
  }
}
