import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDo } from '../../../../models/toDo';
import { GuidHelper } from '../../../../helpers/guid.helper';
import { Subscription } from 'rxjs';

import * as M from 'materialize-css';
import { DatepickerOptions } from 'materialize-css';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit, AfterViewInit, OnDestroy  {

  id: number;
  subscription: Subscription;
  addToDoForm: FormGroup;

  datepicker: Element;

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {
    return new FormGroup({
      newToDoName: new FormControl(null, Validators.required),
      newToDoFinished: new FormControl(false, Validators.required),
      newToDoPlanedExecutionDate: new FormControl(null),
      newToDoContractor: new FormControl(null, Validators.required),
      newToDoPlanedCost: new FormControl(null, Validators.required),
      newToDoCost: new FormControl(null, Validators.required),
      newToDoShopping: new FormControl(false, Validators.required),
    });
  }

  addToDo() {
    const value = this.addToDoForm.value;

    const newToDo = new ToDo(
      GuidHelper.guid(),
      value.newToDoName,
      value.newToDoFinished,
      M.Datepicker.getInstance(this.datepicker).toString(),
      value.newToDoContractor,
      value.newToDoPlanedCost,
      value.newToDoCost,
      value.newToDoShopping,
      []);

      this.roomsService.addToDoToRoom(this.id, newToDo);
      const index = this.roomsService.getIndexAddedToDo(this.id);

      this.router.navigate(['../', index, 'editTask'], {relativeTo: this.route});
  }

  ngAfterViewInit() {
    this.datepicker = document.querySelector('.datepicker');

    const options: Partial<DatepickerOptions> = {
      autoClose: true,
      format: 'yyyy-mm-dd'
    }

    M.Datepicker.init(this.datepicker, options)

    const select = document.querySelector('select');

    M.FormSelect.init(select);
  }
}
