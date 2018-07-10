export class ToDo {
  public name: string;
  public finished: boolean;
  public planedExecutionDate: Date;
  public contractor: string;
  public planedCost: string;
  public cost: string;
  public shopping: boolean


  constructor(name: string, finished: boolean, planedExecutionDate: Date, contractor: string, planedCost: string, cost: string, shopping: boolean) {
    this.name = name
    this.finished = finished
    this.planedExecutionDate = planedExecutionDate
    this.contractor = contractor
    this.planedCost = planedCost
    this.cost = cost
    this.shopping = shopping
  }
};
