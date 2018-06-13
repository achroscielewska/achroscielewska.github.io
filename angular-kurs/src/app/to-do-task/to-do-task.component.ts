import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  tasksList = []

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) =>
    this.tasksList = tasks
    )};

  ngOnInit() {
  }

  removeTask(task: string) {
    this.tasksService.removeTask(task);
  }

  finishTask(task: string) {
    this.tasksService.finishTask(task);
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green'
  }

}
