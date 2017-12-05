import {Budget} from "./Budget";

export class BudgetRequest {
  id: number;
  budget: Budget;
  timeStamp: Date;
  status: String;
  needed_funds: Number;
  request: String;

  constructor(request?: String,needed_funds?:Number, budget?: Budget, status?: String, timeStamp?: Date, id?: number) {
    this.budget = budget;
    this.timeStamp = timeStamp;
    this.status = status;
    this.request = request;
    this.needed_funds = needed_funds;
    this.id = id;
  }
}
