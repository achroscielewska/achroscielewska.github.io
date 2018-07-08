import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, concat } from "rxjs";
import { Room } from "../models/room";

@Injectable()
export class RoomsService {

  private roomListObs = new BehaviorSubject<Array<Room>>([])


  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.roomListObs.next([]);
      }
    })


  }

  init() {
    this.httpService.getRooms()
    .subscribe(rooms => {
      this.roomListObs.next(rooms);
    })
  }

  addRoom(room: Room){

    this.roomListObs.getValue().push(room); //update

  }

  removeRoom(room:Room) {
    const roomsList = this.roomListObs.getValue().filter(e => e !==room);;
    this.roomListObs.next(roomsList)
  }


  getRoomsListObs(): Observable<Array<Room>> {
    return this.roomListObs.asObservable()
  }

  saveRoomsInDb() {
    this.httpService.saveRooms(this.roomListObs.getValue())
  }
}
