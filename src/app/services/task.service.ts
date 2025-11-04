import {Injectable} from '@angular/core';

// import {mockTasks} from '../data_json/mock-tasks';
import Tasks from '../interfaces/Tasks';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL = 'http://localhost:5000/tasks';

  constructor(private httpHandler: HttpClient) {
  }


  public getTasks(): Observable<Tasks[]> {
//  return of(mockTasks);
    return this.httpHandler.get<Tasks[]>(`${this.API_URL}/`);
  }
}
