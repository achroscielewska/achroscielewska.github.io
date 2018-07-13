import { ToDo } from './toDo';
import { Inspiration } from './inspiration';

export class Room {
  private _id?: {
    $oid: string
  };
  public userId: string;
  public code: string;
  public name: string;
  public editMode?: boolean;
  public toDos?: ToDo[];
  public inspirations?: Inspiration[];

  constructor(
    userId: string,
    code: string,
    name: string,
    editMode?: boolean,
    toDos?: ToDo[],
    inspirations?: Inspiration[] ) {
      this.userId = userId;
      this.code = code;
      this.name = name;
      this.editMode = editMode;
      this.toDos = toDos;
      this.inspirations = inspirations
    }
}


