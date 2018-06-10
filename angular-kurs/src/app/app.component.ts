import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask:string
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  addTask(){
    this.tasksList.push(this.newTask)
    this.newTask = ''
  }

  removeTask(task:string) {
    this.tasksList = this.tasksList.filter(e => e !==task);
  }

  finishTask(task:string) {
    this.tasksDone.push(task)
    this.removeTask(task)
  }
}
