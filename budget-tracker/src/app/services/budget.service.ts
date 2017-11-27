import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Routes, Server} from "../util/ServerRoutes";
import {Budget} from "../model/Budget";
import "rxjs/add/operator/map";

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
    return this.http.get(Server.routeTo(Routes.BUDGETS) + '/' + id)
      .map(res => res.json())
  }

  update(budget: Budget) {
    return this.http.put(Server.routeTo(Routes.BUDGETS) + '/' + budget.id, budget)
      .map(res => res.json())
  }

  sendRequest(id: number, request: String) {
    return this.http.post(Server.routeTo(Routes.BUDGETS + '/' + id + '/request'), {request})
  }

}
