import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService {

  private tasksList: Array<Task> = [];
  private tasksFinished: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([])
  private taskFinishedObs = new BehaviorSubject<Array<Task>>([])


  constructor() {
    this.tasksList = [
      {
        name: 'Pranie',
        created: new Date()
      },
      {
        name: 'Sprzątanie',
        created: new Date()
      },
      {
        name: 'Zakupy',
        created: new Date()
      },
      {
        name: 'Podlewanie kwiatów',
        created: new Date()
      }
     ]
    this.taskListObs.next(this.tasksList)
  }

  addTask(task: Task){
    this.tasksList.push(task)
    this.taskListObs.next(this.tasksList)
  }

  removeTask(task:Task) {
    this.tasksList = this.tasksList.filter(e => e !==task);
    this.taskListObs.next(this.tasksList)
  }

  finishTask(task:Task) {
    this.tasksFinished.push(task)
    this.removeTask(task)
    this.taskFinishedObs.next(this.tasksFinished)
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable()
  }

  getTasksFinishedObs(): Observable<Array<Task>> {
    return this.taskFinishedObs.asObservable()
  }
}
