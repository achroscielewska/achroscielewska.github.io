export class Room {
  private _id?: {
    $oid:string
  };
  public userId: string;
  public code: string;
  public name: string;
  public editMode?: boolean;

  constructor(userId: string, code: string, name: string, editMode?: boolean ) {
    this.userId = userId;
    this.code = code;
    this.name = name
    this.editMode = editMode
  }
};


