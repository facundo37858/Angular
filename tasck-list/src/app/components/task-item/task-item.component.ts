import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TASKS } from 'src/assets/mock-tasck';
import { Tasks } from 'src/assets/tasck';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Tasks=TASKS[0]
  faTimes=faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
