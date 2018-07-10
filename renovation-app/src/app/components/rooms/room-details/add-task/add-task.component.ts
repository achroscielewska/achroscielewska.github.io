import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDo } from '../../../../models/toDo';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  id: number;
  addToDoForm: FormGroup;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
    this.addToDoForm = this.initForm()
  }

  initForm() {
    return new FormGroup({
      newToDoName: new FormControl(null, Validators.required),
      newToDoFinished: new FormControl(null, Validators.required),
      newToDoPlanedExecutionDate: new FormControl(null, Validators.required),
      newToDoContractor: new FormControl(null, Validators.required),
      newToDoPlanedCost: new FormControl(null, Validators.required),
      newToDoCost: new FormControl(null, Validators.required),
      newToDoShopping: new FormControl(null, Validators.required),
    })
  }

  addToDo() {
    const value = this.addToDoForm.value

    const newToDo = new ToDo(
      value.newToDoName,
      value.newToDoFinished,
      value.newToDoPlanedExecutionDate,
      value.newToDoContractor,
      value.newToDoPlanedCost,
      value.newToDoCost,
      value.newToDoShopping)

      this.roomsService.addToDoToRoom(this.id, newToDo)

  }

}
