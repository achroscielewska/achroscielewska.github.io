import { ToDo } from './../../../models/toDo';
import { RoomsService } from "./../../../services/room.service";
import { Component, OnInit, Input } from "@angular/core";
import { Room } from "../../../models/room";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-room-details",
  templateUrl: "./room-details.component.html",
  styleUrls: ["./room-details.component.sass"]
})
export class RoomDetailsComponent implements OnInit {

  @Input()
  toDoList: Array<ToDo> = [];

  room: Room;
  id: number;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private router: Router
  )
  { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];

      this.room = this.roomsService.getRoom(this.id);
    });

    this.toDoList = this.roomsService.getToDoList(this.id)

    console.log(this.toDoList )

  }

  removeToDo(toDo: ToDo) {
    this.roomsService.removeToDo(this.id, toDo);
  }
}
