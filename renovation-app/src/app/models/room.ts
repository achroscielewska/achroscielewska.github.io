export interface Room {
  _id?: {
    $oid:string
  },
  userId: string;
  code: string;
  name: string;
  editMode?: boolean;
}


