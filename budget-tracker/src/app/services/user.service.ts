import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/User";
import {Routes, Server} from "../util/ServerRoutes";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(Server.routeTo(Routes.USER + '/all'))
      .map(res => res.json())
  }

  create(user: User): Observable<User> {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.USER) + '/' + id)
  }

  update(user: User) {
    return this.http.put(Server.routeTo(Routes.USER) + '/' + user.id, user)
      .map(res => res.json())
  }

}
