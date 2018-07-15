export class Inspiration {
  public id: string;
  public inspirationLink: string;
  public isSelected: boolean;
  public editMode?: boolean;

  constructor (
    id: string,
    inspirationLink: string,
    isSelected: boolean,
    editMode?: boolean ) {
      this.id = id;
      this.inspirationLink = inspirationLink;
      this.isSelected = isSelected
      this.editMode = editMode
  }
}
