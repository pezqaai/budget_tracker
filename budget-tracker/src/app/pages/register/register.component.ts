import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import  'rxjs/add/observable/of';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public users: User[];

  changeForm: FormGroup = new FormGroup({
    change_username: new FormControl('', [Validators.required]),
    change_password: new FormControl('', [Validators.required]),
    change_email: new FormControl('', [Validators.required, Validators.email])
  });
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private userService:UserService) {
  }

  refresh()
  {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
  ngOnInit() {
    this.refresh()
  }

  submit() {
    this.userService.create(new User(this.username.value, this.password.value, this.email.value))
      .subscribe(
        res => this.refresh(),
        err => console.log(err))
  }

  delete(id: number) {
    this.userService.delete(id)
      .subscribe(
        res => this.refresh(),
        err => console.log(err)
      );
  }
  update(user:User) {
    user.username = this.change_username.value
    user.email = this.change_email.value
    user.password = this.change_password.value
    this.userService.update(user)
      .subscribe(
        res => this.refresh(),
        err => console.log(err)
      );
  }
  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }
  get change_username(): AbstractControl {
    return this.changeForm.get('change_username');
  }

  get change_password(): AbstractControl {
    return this.changeForm.get('change_password');
  }

  get change_email(): AbstractControl {
    return this.changeForm.get('change_email');
  }


}
