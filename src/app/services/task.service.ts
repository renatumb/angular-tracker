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

  public deleteTask(t: Tasks): Observable<void> {
    console.log('TaskService.deleteTask()')
      const url = `${this.API_URL}/${t.id}`;
      const response = this.httpHandler.delete<void>(url);
      return response;
  }

  toggleReminder(taskItem: Tasks): Observable<Tasks> {
    console.log('TaskService.toggleReminder()')
    const url = `${this.API_URL}/${taskItem.id}`;
    //taskItem.reminder = !taskItem.reminder;

    let taskCopy : Tasks ={
      id: taskItem.id,
      day: taskItem.day,
      reminder: !taskItem.reminder,
      text: taskItem.text
    }

    const response = this.httpHandler.put<Tasks>(url, taskCopy);
    return response;
  }
}
