import { TasksService } from './../services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
    this.tasksService.addTask(this.newTask);
    this.newTask = '';
  }


}
