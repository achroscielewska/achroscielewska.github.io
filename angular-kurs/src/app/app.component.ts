import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasksList: Array<string> = [];
  tasksFinished: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Pranie', 'Sprzątanie', 'Zakupy', 'Podlewanie kwiatów']
  }

  addTask(task: string){
    this.tasksList.push(task)
  }

  removeTask(task:string) {
    this.tasksList = this.tasksList.filter(e => e !==task);
  }

  finishTask(task:string) {
    this.tasksFinished.push(task)
    this.removeTask(task)
  }
}
