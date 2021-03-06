import { Component, OnInit } from '@angular/core';
import {Role} from "../model/User";
import {AuthService} from "../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private common: MenuItem[] = [
    {link: '/help', title: 'Help'}
  ];

  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [...this.common]],
    [Role.USER, [...this.common, {link: '/budgets', title: 'Budgets'}]],
    [Role.ADMIN, [{link: '/stats', title: 'Statistics'}, {link: '/budgets', title: 'Budgets'},{link:'/register',title: 'Add New User'}]]
  ]);

  menus: MenuItem[];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenus()
      }
    })
  }

  setMenus() {
    if (this.authService.isLoggedIn) {
      this.menus = this.roleMenus.get(this.authService.user.role);
    } else {
      this.menus = this.roleMenus.get(Role.GUEST)
    }
  }

  logout() {
    this.authService.logout().subscribe(
      res => this.router.navigate(['/login']),
      err => err
    );
  }
}

interface MenuItem {
  link: String;
  title: String;
}
