import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordComponent} from './password/password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';



@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'password',
        loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
      }
    ])
  ]
})
export class LoginModule { }
