import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string) {
    this.tasksList.push(task);
  }

  removeTask(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);

    this.removeTask(task);
  }

}
