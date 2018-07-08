import { Room } from './../../models/room';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/room.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.sass']
})


export class EditRoomsComponent implements OnInit {

  addRoomForm: FormGroup;


  constructor(private roomsService: RoomsService, private authService: AuthService) { }

  ngOnInit() {
    this.addRoomForm = this.initForm()
  }

  initForm() {
    return new FormGroup({
      newRoomCode: new FormControl(null, Validators.required),
      newRoomName: new FormControl(null, Validators.required)
    })
  }

  addRoom() {
    const value = this.addRoomForm.value

    const newRoom: Room = { userId: this.authService.user.uid, code: value.newRoomCode, name: value.newRoomName};

    this.roomsService.addRoom(newRoom)

    this.addRoomForm = this.initForm();

  }

}
