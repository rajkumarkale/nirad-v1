import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedComponent } from './unauthenticated.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    UnauthenticatedComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnauthenticatedComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'register'
          },
          {
            path: 'register',
            component: RegisterComponent
          },
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      }
    ]),
    TranslateModule
  ]
})
export class UnauthenticatedModule { }
