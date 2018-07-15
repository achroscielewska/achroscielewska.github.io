import { Inspiration } from './../../../../models/inspiration';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToDo } from '../../../../models/toDo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  inspirations: Inspiration[];

  addInspirationForm: FormGroup;

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
    this.inspirations = this.roomsService.getInspirationList(this.id, this.taskId)

    console.log(this.toDo);
    console.log(this.inspirations)

    this.addInspirationForm = this.initInspirationForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initInspirationForm() {
    return new FormGroup({
      newInspirationLink: new FormControl(null, Validators.required),
      newInspirationIsSelected: new FormControl(false, Validators.required)
    })
  }

  addInspiration() {
    const value = this.addInspirationForm.value;
    const newInspiration = new Inspiration (this.roomsService.guid(), value.newInspirationLink, value.newInspirationIsSelected);

    this.roomsService.addInspirationToToDo(this.id, this.taskId, newInspiration);

    this.addInspirationForm = this.initInspirationForm();

    console.log(newInspiration)
  }

  removeInspiration(inspiration: Inspiration) {
    this.roomsService.removeInspiration(this.id, this.taskId, inspiration)

    this.inspirations = this.roomsService.getInspirationList(this.id, this.taskId)
  }

  editInspirtaionMode(inspiration: Inspiration) {
    console.log('editMode')
    return inspiration.editMode = true;
  }

  leaveInspirationEditMode(inspiration: Inspiration) {
    return inspiration.editMode = false;
  }

}
