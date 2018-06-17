import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>
    this.tasksList = tasks.slice().filter(t => t.isDone === false)
    )};

  ngOnInit() {
  }

  removeTask(task: Task) {
    this.tasksService.removeTask(task);
  }

  finishTask(task: Task) {
    this.tasksService.finishTask(task);
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green'
  }

}
