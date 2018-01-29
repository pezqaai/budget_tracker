import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BudgetService} from "../../../services/budget.service";
import {Budget} from "../../../model/Budget";
import {AuthService} from "../../../services/auth.service";
import {BudgetRequest} from "../../../model/BudgetRequest";

@Component({
  selector: 'app-add-budgets',
  templateUrl: './add-budgets.component.html',
  styleUrls: ['./add-budgets.component.css']
})
export class AddBudgetsComponent implements OnInit {
  budgetForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    available_funds: new FormControl('', [Validators.required])
  });

  constructor(private budgetService: BudgetService,private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  get location() {
    return this.budgetForm.get('location')
  }

  get description() {
    return this.budgetForm.get('description')
  }
  get available_funds()
  {
    return this.budgetForm.get('available_funds')
  }

  get rest()
  {
    return this.budgetForm.get('available_funds')
  }

  submit() {
    this.budgetService.create(new Budget(this.description.value, this.location.value, this.available_funds.value, this.rest.value))
      .subscribe(
        res => this.router.navigate(['/budgets']),
        err => console.log(err)
      )
    console.log("rest: "+this.rest.value);
  }
}
