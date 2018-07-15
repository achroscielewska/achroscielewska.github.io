import { ToDo } from './toDo';

export class Contractor {
  private _id?: {
    $oid: string
  };
  public userId: string;
  public name: string;
  public toDos?: ToDo[]

  constructor(
    userId: string,
    name: string,
    toDos?: ToDo[] ) {
      this.userId = userId;
      this.name = name;
      this.toDos = toDos
    }
}
