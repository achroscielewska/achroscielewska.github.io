import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room';
import { RoomsService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  @Input()
  roomsList: Array<Room> = [];

  constructor(private roomsService: RoomsService) {
    this.roomsService.getRoomsListObs().subscribe((rooms: Array<Room>) =>
    this.roomsList = rooms
    ); }

  ngOnInit() {
    console.log(this.roomsList);
  }


  save() {
    this.roomsService.saveRoomsInDb();
  }

}
