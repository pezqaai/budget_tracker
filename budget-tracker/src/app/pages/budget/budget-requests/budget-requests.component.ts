import { Component, OnInit } from '@angular/core';
import {Budget, BudgetStatus} from "../../../model/Budget";
import {ActivatedRoute, Router} from "@angular/router";
import {BudgetService} from "../../../services/budget.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetRequest} from "../../../model/BudgetRequest";

@Component({
  selector: 'app-budget-requests',
  templateUrl: './budget-requests.component.html',
  styleUrls: ['./budget-requests.component.css']
})
export class BudgetRequestsComponent implements OnInit {

  requestForm: FormGroup = new FormGroup({
    request: new FormControl('', [Validators.required]),
    funds: new FormControl('', [Validators.required])
  });

  budget: Budget = new Budget();
  req: BudgetRequest;
  id: number;
  statuses: String[] = [BudgetStatus.SUBMITED, BudgetStatus.ONGOING, BudgetStatus.APPROVED];

  constructor(private budgetService: BudgetService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.reload();
  }

  private reload() {
    console.log("reload");
    this.budgetService.read(this.id)
      .subscribe(
        budget => this.initBudget(budget),
        err => console.log(err)
      )
  }

  private initBudget(budget){
    console.log("initBudget");
    this.budget = budget;
    console.log("start: "+this.budget.rest);
    this.budget.rest= budget.requests.reduce((a,b) => a-b.price,this.budget.available_funds);
    console.log("end: "+this.budget.rest)
  }

  private reloadSubmit() {
    console.log("reloadSubmit");
    this.budgetService.read(this.id)
      .subscribe(
        budget => this.budget,
        err => console.log(err)
      )
  }

  updateStatus(event) {
    console.log("updateStatus");
    this.budget.status = event.source.triggerValue;
    this.budgetService.update(this.budget)
      .subscribe(
        issue => console.log('ok'),
        err => console.log(err)
      )
  }

  updateRequestStatus(event,request) {
    console.log("updateRequestStatus");
    this.req = request;
    this.req.status = event.source.triggerValue
    this.budgetService.updateRequest(this.budget.id,this.req)
      .subscribe(
        issue => console.log('ok'),
        err => console.log(err)
      )
  }
  deleteRequest(id) {
    this.budgetService.deleteRequest(id)
      .subscribe(
        issue => this.reload(),
        err => console.log(err)
      )
  }

  submit() {
    console.log("updateBudget_budget-request.component.ts");
    this.budgetService.updateBudget(this.budget.id, this.budget).subscribe(
      res => this.budgetService.sendRequest(this.budget.id, new BudgetRequest(this.request.value,this.funds.value))
        .subscribe(
          res => this.reload(),
          err => console.log(err)),
      err => console.log(err)
    )
  }

  get request()
  {
    return this.requestForm.get('request')
  }
  get funds()
  {
    return this.requestForm.get('funds')
  }
}
