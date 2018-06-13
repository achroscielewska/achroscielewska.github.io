import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {

  tasksFinished: Array<string> = []

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksFinishedObs().subscribe((tasks: Array<string>) =>
    this.tasksFinished = tasks
  )}

  ngOnInit() {
  }

}
