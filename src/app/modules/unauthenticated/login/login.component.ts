import { Component, OnInit } from '@angular/core';
import { UserType } from './login.enum';
import { IUser } from './login.interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: IUser = {type: '', name: '', contact: 9090909};
  public productName = 'Saas Product Name';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user.type = UserType.Primary;
  }

  submitForm(){
    this.router.navigate(['access/login/password']);
  }

}
