import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { TASKS } from 'src/assets/mock-tasck';
import { Tasks } from 'src/assets/tasck';
import {HttpClient, HttpHandler, HttpHeaderResponse, HttpHeaders} from '@angular/common/http'

const httpOptions={
  headers:new HttpHeaders({
    'Contetn-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl='http://localhost:5000/tasck'

  constructor(
    private htpp:HttpClient
  ) { }

  getTask():Observable<Tasks[]>{
    
    return this.htpp.get<Tasks[]>(this.apiUrl)
  }

  deleteTask(task:Tasks):Observable<Tasks>{
    const url=`${this.apiUrl}/${task.id}`
    return this.htpp.delete<Tasks>(url)
  }

  upDateTask(task:Tasks):Observable<Tasks>{
    const url=`${this.apiUrl}/${task.id}`
    return this.htpp.put<Tasks>(url,task,httpOptions)
  }
  addTask(task:Tasks):Observable<Tasks>{
    
    return this.htpp.post<Tasks>(this.apiUrl,task,httpOptions)
  }
}
