import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToDo } from '../../../../models/toDo';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})
export class EditTaskComponent implements OnInit, OnDestroy {

  id: number;
  taskId: number;
  subscription: Subscription;
  toDo: ToDo;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.taskId = +params['taskId'];
    });

    this.toDo = this.roomsService.getToDo(this.id, this.taskId);

    console.log(this.toDo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
