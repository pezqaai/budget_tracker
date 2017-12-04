

import {User} from "./User";

export class BudgetStatus {
  static SUBMITED: String = "SUBMITED";
  static ONGOING: String = "ONGOING";
  static APPROVED: String = "APPROVED";
}

export class Budget {
  id: number;
  user: User;
  timeStamp: Date;
  status: String;
  description: String;
  location: String;
  available_funds: Number;
  requests: String[];

  constructor(description?: String, location?: String, available_funds?:Number, user?: User, status?: String, timeStamp?: Date, id?: number) {
    this.user = user;
    this.timeStamp = timeStamp;
    this.status = status;
    this.description = description;
    this.location = location;
    this.available_funds = available_funds;
    this.id = id;
  }
}
