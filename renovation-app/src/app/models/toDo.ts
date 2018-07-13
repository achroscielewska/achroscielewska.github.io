export class ToDo {
  public id: string;
  public name: string;
  public finished: boolean;
  public planedExecutionDate: Date;
  public contractor: string;
  public planedCost: number;
  public cost: number;
  public shopping: boolean;


  constructor (
    id: string,
    name: string,
    finished: boolean,
    planedExecutionDate: Date,
    contractor: string,
    planedCost: number,
    cost: number,
    shopping: boolean ) {
      this.id = id;
      this.name = name;
      this.finished = finished;
      this.planedExecutionDate = planedExecutionDate;
      this.contractor = contractor;
      this.planedCost = planedCost;
      this.cost = cost;
      this.shopping = shopping;
  }
}
