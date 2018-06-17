import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService {

  private taskListObs = new BehaviorSubject<Array<Task>>([])


  constructor(private httpService: HttpService) {
    this.httpService.getTasks()
    .subscribe(tasks => {
      this.taskListObs.next(tasks);
    })
  }

  addTask(task: Task){

    const tasksList = this.taskListObs.getValue(); //get tasksList
    tasksList.push(task);

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
