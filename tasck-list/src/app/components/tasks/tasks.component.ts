import { Component, OnInit } from '@angular/core'
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

}
