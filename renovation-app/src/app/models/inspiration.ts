export class Inspiration {
  public id: string;
  public inspirationLink: string;
  public isSelected: boolean;

  constructor (
    id: string,
    inspirationLink: string,
    isSelected: boolean ) {
      this.id = id;
      this.inspirationLink = inspirationLink;
      this.isSelected = isSelected
  }
}
