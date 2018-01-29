import { Component } from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {BudgetService} from "../../services/budget.service";
import {Budget} from "../../model/Budget";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent{

  displayedColumns: String[] = ['description','diagram','sub'];
  budgets: DataSource<any> = new BudgetsDataSource(this.budgetService);

  constructor(private budgetService: BudgetService) {
  }

  refresh(){
    this.budgets = new BudgetsDataSource(this.budgetService)
  }

  ngOnInit() {
  }

}

export class BudgetsDataSource extends DataSource<any> {

  constructor(private budgetService: BudgetService) {
    super();
  }

  connect(): Observable<Budget[]> {
    return this.budgetService.getBudget();
  }

  disconnect() {
  }
}
