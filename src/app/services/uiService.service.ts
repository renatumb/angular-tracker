import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showAddTaskComponent: boolean;
  private subject: Subject<boolean>;

  constructor() {
    this.showAddTaskComponent = false;
    this.subject = new Subject<boolean>();
  }

  public toggleAddTaskComponent(): void {
    console.log('UiServiceService.toggleAddTaskComponent()');
    this.showAddTaskComponent = !this.showAddTaskComponent;
    this.subject.next(this.showAddTaskComponent);
  }

  public onToggleAddTaskComponent(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
