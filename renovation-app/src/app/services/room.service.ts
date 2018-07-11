import { ToDo } from './../models/toDo';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, concat, Subject } from "rxjs";
import { Room } from "../models/room";

@Injectable()
export class RoomsService {

  roomListObs = new BehaviorSubject<Array<Room>>([]);
  toDoListObs = new BehaviorSubject<Array<ToDo>>([])

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

  getRoomsListObs(): Observable<Array<Room>> {
    return this.roomListObs.asObservable()
  }

  addRoom(room: Room){
    const roomsList = this.roomListObs.getValue()
    roomsList.push(room); //update
    this.roomListObs.next(roomsList)
  }

  removeRoom(room:Room) {
    const roomsList = this.roomListObs.getValue().filter(e => e !==room);;
    this.roomListObs.next(roomsList)
  }

  getRoom(index: number) {
    const roomsList = this.roomListObs.getValue()

    return roomsList[index]
  }

  addToDoToRoom(index: number, toDo: ToDo) {
    const roomsList = this.roomListObs.getValue()
    roomsList[index].toDo.push(toDo)
    this.roomListObs.next(roomsList)
  }

  getIndexAddedToDo(index: number) {
    const roomsList = this.roomListObs.getValue()
    const newToDoIndex = roomsList[index].toDo.length - 1

    return newToDoIndex
  }

  getToDo(roomIndex: number, toDoIndex: number) {
    const room = this.getRoom(roomIndex)

    return room.toDo[toDoIndex]
  }

  getToDoList(index: number) {
    const roomsList = this.roomListObs.getValue()

    return roomsList[index].toDo

  }


  saveRoomsInDb() {
    this.httpService.saveRooms(this.roomListObs.getValue())
  }
}
