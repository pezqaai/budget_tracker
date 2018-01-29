import {Budget} from "./Budget";

export class BudgetRequest {
  id: number;
  budget: Budget;
  timeStamp: Date;
  status: String;
  price: Number;
  request: String;

  constructor(request?: String, price?:Number, budget?: Budget, status?: String, timeStamp?: Date, id?: number) {
    this.budget = budget;
    this.timeStamp = timeStamp;
    this.status = status;
    this.request = request;
    this.price = price;
    this.id = id;
  }
}
