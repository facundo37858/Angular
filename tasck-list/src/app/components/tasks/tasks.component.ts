import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

import { Tasks } from 'src/assets/tasck';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Tasks[]=[]

  constructor(
    private taskService:TasksService
  ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(t=>this.tasks=t)
  }
  deleteTask(task:Tasks){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks=this.tasks.filter(t=> t.id !== task.id)
    })
  }
  changeReminder(task:Tasks){
    task.reminder=!task.reminder
    this.taskService.upDateTask(task).subscribe()
  }

  addTask(task:Tasks){
    this.taskService.addTask(task).subscribe(t=>{
      this.tasks.push(t)
    })
  }
}
