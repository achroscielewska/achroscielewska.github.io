import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {

  @Input()
  tasksFinished: Array<string> = []
  constructor() { }

  ngOnInit() {
  }

}
