import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {

  tasksFinished: Array<Task> = []

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksFinishedObs().subscribe((tasks: Array<Task>) =>
    this.tasksFinished = tasks
  )}

  ngOnInit() {
  }

}
