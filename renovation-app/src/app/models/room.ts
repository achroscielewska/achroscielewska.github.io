import { ToDo } from "./toDo";

export class Room {
  private _id?: {
    $oid:string
  };
  public userId: string;
  public code: string;
  public name: string;
  public editMode?: boolean;
  public toDo?: ToDo[]

  constructor(userId: string, code: string, name: string, editMode?: boolean, toDo?: ToDo[] ) {
    this.userId = userId;
    this.code = code;
    this.name = name
    this.editMode = editMode
    this.toDo = toDo
  }
};


