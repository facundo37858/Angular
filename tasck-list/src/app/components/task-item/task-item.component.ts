import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() deleteTask:EventEmitter<Tasks>= new EventEmitter()
  @Output() changeReminder:EventEmitter<Tasks>= new EventEmitter()
  faTimes=faTimes

  constructor() { }

  ngOnInit(): void {
  }
  handlerDelete(task:Tasks){
   this.deleteTask.emit(task)

  }
  handlerReminder(task:Tasks){
    this.changeReminder.emit(task)
  }

}
