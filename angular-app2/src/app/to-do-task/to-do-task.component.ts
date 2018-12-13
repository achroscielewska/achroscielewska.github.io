import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  tasksList = [];

  @Output()
  emitRemovedTask = new EventEmitter<string>();

  @Output()
  emitDoneTask = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

  }

  removeTask(task) {
    this.emitRemovedTask.emit(task);
  }

  done(task) {
    this.emitDoneTask.emit(task);
  }

}
