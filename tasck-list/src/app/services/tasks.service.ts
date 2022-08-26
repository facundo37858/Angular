import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { TASKS } from 'src/assets/mock-tasck';
import { Tasks } from 'src/assets/tasck';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTask():Observable<Tasks[]>{
    const task=of(TASKS)
    return task
  }
}
