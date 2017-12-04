import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {BudgetService} from "../../../services/budget.service";
import {Budget} from "../../../model/Budget";

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent {

  displayedColumns: String[] = ['user','description', 'location', 'status', 'timestamp','funds','edit'];
  budgets: DataSource<any> = new BudgetsDataSource(this.budgetService);

  constructor(private budgetService: BudgetService) {
  }


  refresh(){
    this.budgets = new BudgetsDataSource(this.budgetService)
  }

  delete(id: number) {
    this.budgetService.delete(id)
      .subscribe(
        res => this.refresh(),
        err => this.refresh()
      );
  }
  toDate(timestamp: number): Date {
    return new Date(timestamp)
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
