import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDo } from '../../../../models/toDo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit, OnDestroy  {

  id: number;
  subscription: Subscription;
  addToDoForm: FormGroup;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.addToDoForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      newToDoName: new FormControl(null, Validators.required),
      newToDoFinished: new FormControl(false, Validators.required),
      newToDoPlanedExecutionDate: new FormControl(null, Validators.required),
      newToDoContractor: new FormControl(null, Validators.required),
      newToDoPlanedCost: new FormControl(null, Validators.required),
      newToDoCost: new FormControl(null, Validators.required),
      newToDoShopping: new FormControl(false, Validators.required),
    });
  }

  addToDo() {
    const value = this.addToDoForm.value;

    const newToDo = new ToDo(
      this.roomsService.guid(),
      value.newToDoName,
      value.newToDoFinished,
      value.newToDoPlanedExecutionDate,
      value.newToDoContractor,
      value.newToDoPlanedCost,
      value.newToDoCost,
      value.newToDoShopping,
      []);

      this.roomsService.addToDoToRoom(this.id, newToDo);
      const index = this.roomsService.getIndexAddedToDo(this.id);

      this.router.navigate(['../', index, 'editTask'], {relativeTo: this.route});
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
