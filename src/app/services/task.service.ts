import {Injectable} from '@angular/core';

import {mockTasks} from '../mock-tasks';
import Tasks from '../Tasks';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getTasks(): Observable<Tasks[]> {
    return of(mockTasks);
  }
}
