import {Routes} from "@angular/router";
import {Role} from "../model/User";
import {RouteGuard} from "./route.guard";
import {LoginComponent} from "../pages/login/login.component";
import {RegisterComponent} from "../pages/register/register.component";
import {ErrorComponent} from "../pages/error/error.component";
import {BudgetsComponent} from "../pages/budget/budgets/budgets.component";
import {AddBudgetsComponent} from "../pages/budget/add-budgets/add-budgets.component";
import {BudgetRequestsComponent} from "../pages/budget/budget-requests/budget-requests.component";
import {HelpComponent} from "../pages/help/help.component";
import {StatsComponent} from "../pages/stats/stats.component";

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.ADMIN]}},
      {path: 'budgets', component: BudgetsComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'budgets/add', component: AddBudgetsComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'budgets/:id', component: BudgetRequestsComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'help', component: HelpComponent},
      {path: 'stats', component: StatsComponent, data: {roles: [Role.ADMIN]}},
      {path: '**', component: ErrorComponent}
    ]
  }];
