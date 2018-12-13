import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask = 'nowe zadanie';
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }

  removeTask(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);

    this.removeTask(task);
  }

}
