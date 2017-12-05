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
    this.budgetService.read(this.id)
      .subscribe(
        budget => this.budget = budget,
        err => console.log(err)
      )

  }

  updateStatus(event) {
    this.budget.status = event.source.triggerValue;
    this.budgetService.update(this.budget)
      .subscribe(
        issue => console.log('ok'),
        err => console.log(err)
      )
  }
  updateRequestStatus(event,request) {
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
    this.budgetService.sendRequest(this.budget.id, new BudgetRequest(this.request.value,this.funds.value))
      .subscribe(
        issue => this.reload(),
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
