import { Room } from './../../models/room';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
  roomsList: Array<Room> = [];


  constructor(private roomsService: RoomsService, private authService: AuthService) {
    this.roomsService.getRoomsListObs().subscribe((rooms: Array<Room>) => {
    this.roomsList = rooms; });
  }

  ngOnInit() {
    this.addRoomForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      newRoomCode: new FormControl(null, Validators.required),
      newRoomName: new FormControl(null, Validators.required)
    });
  }

  addRoom() {
    const value = this.addRoomForm.value;
    const newRoom = new Room (this.authService.user.uid, value.newRoomCode, value.newRoomName, false, []);

    this.roomsService.addRoom(newRoom);

    this.addRoomForm = this.initForm();
  }

  removeRoom(room: Room) {
    this.roomsService.removeRoom(room);
  }

  editRoomMode(room: Room) {
    return room.editMode = true;
  }

  leaveRoomEditMode(room: Room) {
    return room.editMode = false;
  }

}
