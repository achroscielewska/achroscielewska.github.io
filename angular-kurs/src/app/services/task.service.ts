import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService {

  private tasksList: Array<string> = [];
  private tasksFinished: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>([])
  private taskFinishedObs = new BehaviorSubject<Array<string>>([])


  constructor() {
    this.tasksList = ['Pranie', 'Sprzątanie', 'Zakupy', 'Podlewanie kwiatów']
    this.taskListObs.next(this.tasksList)
  }

  addTask(task: string){
    this.tasksList.push(task)
    this.taskListObs.next(this.tasksList)
  }

  removeTask(task:string) {
    this.tasksList = this.tasksList.filter(e => e !==task);
    this.taskListObs.next(this.tasksList)
  }

  finishTask(task:string) {
    this.tasksFinished.push(task)
    this.removeTask(task)
    this.taskFinishedObs.next(this.tasksFinished)
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable()
  }

  getTasksFinishedObs(): Observable<Array<string>> {
    return this.taskFinishedObs.asObservable()
  }
}
