import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, concat } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService {

  private taskListObs = new BehaviorSubject<Array<Task>>([])


  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.taskListObs.next([]);
      }
    })
  }

  init() {
    this.httpService.getTasks()
    .subscribe(tasks => {
      this.taskListObs.next(tasks);
    })
  }

  addTask(task: Array<Task>){

    const tasksList = this.taskListObs.getValue().concat(task); //get tasksList
    this.taskListObs.next(tasksList)
  }

  removeTask(task:Task) {
    const tasksList = this.taskListObs.getValue().filter(e => e !==task);;
    this.taskListObs.next(tasksList)
  }

  finishTask(task:Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;

    const tasksList = this.taskListObs.getValue();
    this.taskListObs.next(tasksList)

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable()
  }

  saveTasksInDb() {
    this.httpService.saveTasks(this.taskListObs.getValue())
  }
}
