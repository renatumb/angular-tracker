import {Injectable} from '@angular/core';

import {mockTasks} from '../mock-tasks';
import Tasks from '../Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getTasks(): Tasks[] {
    return mockTasks;
  }
}
