import { Component, OnInit } from '@angular/core'
import { TASKS } from 'src/assets/mock-tasck';
import { Tasks } from 'src/assets/tasck';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Tasks[]=TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
