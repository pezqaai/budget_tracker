import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {MaterialItemsModule} from "./MaterialItemsModule";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes/routes";
import {BudgetService} from "./services/budget.service";
import {RouteGuard} from "./routes/route.guard";
import {AuthService} from "./services/auth.service";
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatsComponent } from './pages/stats/stats.component';
import { BudgetsComponent } from './pages/budget/budgets/budgets.component';
import { AddBudgetsComponent } from './pages/budget/add-budgets/add-budgets.component';
import { BudgetRequestsComponent } from './pages/budget/budget-requests/budget-requests.component';
import { HelpComponent } from './pages/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    StatsComponent,
    BudgetsComponent,
    AddBudgetsComponent,
    BudgetRequestsComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, BudgetService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
