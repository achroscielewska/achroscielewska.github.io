import { Inspiration } from './../models/inspiration';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Room } from '../models/room';
import { ToDo } from './../models/toDo';

@Injectable()
export class RoomsService {

  roomListObs = new BehaviorSubject<Array<Room>>([]);


  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.roomListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getRooms()
    .subscribe(rooms => {
      this.roomListObs.next(rooms);
    });
  }

  getRoomsListObs(): Observable<Array<Room>> {
    return this.roomListObs.asObservable();
  }

  addRoom(room: Room) {
    const roomsList = this.roomListObs.getValue();
    roomsList.push(room); // update
    this.roomListObs.next(roomsList);
  }

  removeRoom(room: Room) {
    const roomsList = this.roomListObs.getValue().filter(e => e !== room);
    this.roomListObs.next(roomsList);
  }

  getRoom(index: number) {
    const roomsList = this.roomListObs.getValue();

    return roomsList[index];
  }

  addToDoToRoom(index: number, toDo: ToDo) {
    const roomsList = this.roomListObs.getValue();
    roomsList[index].toDos.push(toDo);
    this.roomListObs.next(roomsList);
  }

  getIndexAddedToDo(index: number) {
    const roomsList = this.roomListObs.getValue();
    const newToDoIndex = roomsList[index].toDos.length - 1;

    return newToDoIndex;
  }

  getToDo(roomIndex: number, toDoIndex: number) {
    const room = this.getRoom(roomIndex);

    return room.toDos[toDoIndex];
  }

  getToDoList(index: number) {
    const room = this.getRoom(index);
    console.log(room)

    return room.toDos;
  }

  removeToDo(roomIndex: number, toDo: ToDo) {
    const room = this.getRoom(roomIndex);
    const updatedToDoList = room.toDos.filter(e => e !== toDo);

    room.toDos = updatedToDoList;
  }

  addInspirationToToDo(roomIndex: number, toDoIndex: number, inspiration: Inspiration) {
    const toDo = this.getToDo(roomIndex, toDoIndex);

    return toDo.inspirations.push(inspiration);
  }

  getInspirationList(roomIndex: number, toDoIndex: number) {
    const toDo = this.getToDo(roomIndex, toDoIndex);

    return toDo.inspirations;
  }

  removeInspiration(roomIndex: number, toDoIndex: number, inspiration: Inspiration) {
    const toDo = this.getToDo(roomIndex, toDoIndex);
    const updatedInspirationList = toDo.inspirations.filter(e => e !== inspiration);

    toDo.inspirations = updatedInspirationList;
  }

  saveRoomsInDb() {
    this.httpService.saveRooms(this.roomListObs.getValue());
  }

  guid() {
    let uniqueId = Math.random().toString(36).substring(2)
      + (new Date()).getTime().toString(36);
    return uniqueId;
  }
}
