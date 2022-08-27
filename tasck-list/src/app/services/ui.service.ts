import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean=false
  private subj:Subject<any>=new Subject()

  constructor() { }

  toggleAddTask():void{
    this.showAddTask=!this.showAddTask
    this.subj.next(this.showAddTask)
  }

  onToggle():Observable<any>{
    return this.subj.asObservable()
  }
}
