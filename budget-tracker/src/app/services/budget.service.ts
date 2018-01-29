import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Routes, Server} from "../util/ServerRoutes";
import {Budget} from "../model/Budget";
import "rxjs/add/operator/map";
import {BudgetRequest} from "../model/BudgetRequest";

@Injectable()
export class BudgetService {

  constructor(private http: Http) {
  }

  getBudget(): Observable<Budget[]> {
    return this.http.get(Server.routeTo(Routes.BUDGETS))
      .map(res => res.json())
  }

  create(budget: Budget): Observable<Budget> {
    return this.http.post(Server.routeTo(Routes.BUDGETS), budget)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.BUDGETS) + '/' + id)
      .map(res => res.json())
  }

  read(id: number) {
    console.log("read");
    console.log(id);
    return this.http.get(Server.routeTo(Routes.BUDGETS) + '/' + id)
      .map(res => res.json())
  }

  update(budget: Budget) {
    console.log("update_budget.service.ts");
    return this.http.put(Server.routeTo(Routes.BUDGETS) + '/' + budget.id, budget)
      .map(res => res.json())
  }

  updateBudget(id: number, budget: Budget) {
    console.log("updateBudget_budget.service.ts");
    return this.http.put(Server.routeTo(Routes.BUDGETS) + '/' + budget.id, budget)
      .map(res => res.json())
  }

  sendRequest(id: number, request: BudgetRequest) {
    console.log("sendRequest_budget.service.ts");
    return this.http.post(Server.routeTo(Routes.BUDGETS + '/' + id + '/request'), request)
  }
  updateRequest(id: number, request: BudgetRequest) {
    console.log("updateRequest_budget.service.ts");
    return this.http.put(Server.routeTo(Routes.BUDGETS + '/' + id + '/request'), request)
  }
  deleteRequest(id: number) {
    console.log("deleteRequest_budget.service.ts");
    return this.http.delete(Server.routeTo(Routes.BUDGETS + '/' + id + '/request'))
  }

}
