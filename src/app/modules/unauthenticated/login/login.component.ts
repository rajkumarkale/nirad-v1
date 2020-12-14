import { Component, OnInit } from '@angular/core';
import { UserType } from './login.enum';
import { IUser } from './login.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: IUser = {type: '', name: '', contact: 9090909};
  constructor() { }

  ngOnInit(): void {
    this.user.type = UserType.Primary;
  }

}
