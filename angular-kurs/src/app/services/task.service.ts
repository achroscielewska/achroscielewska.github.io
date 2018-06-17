import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task";

@Injectable()
export class TasksService {

  private taskListObs = new BehaviorSubject<Array<Task>>([])


  constructor(private httpService: HttpService) {
    const tasksList = [
      {
        name: 'Pranie',
        created: new Date().toLocaleString(),
        isDone: false
      },
      {
        name: 'Sprzątanie',
        created: new Date().toLocaleString(),
        isDone: false
      },
      {
        name: 'Zakupy',
        created: new Date().toLocaleString(),
        isDone: false
      },
      {
        name: 'Podlewanie kwiatów',
        created: new Date().toLocaleString(),
        isDone: false
      },
      {
        name: 'Zadanie wykonane',
        created: new Date().toLocaleString(),
        end: new Date().toLocaleDateString(),
        isDone: true
      }
     ]
    this.taskListObs.next(tasksList) //assigne tasksList
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

    // this.tasksFinished.push(task)
    // this.removeTask(task)
    // this.taskFinishedObs.next(this.tasksFinished)
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable()
  }
}
