import { TasksService } from './../services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;

  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
  }

  addTask() {
    const task: Task = { name: this.newTask, created: new Date().toLocaleString(), isDone: false }
    this.tasksService.addTask(task);
    this.newTask = '';
  }


}