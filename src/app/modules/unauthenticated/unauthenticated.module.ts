import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedComponent } from './unauthenticated.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UnauthenticatedComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
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
    ])
  ]
})
export class UnauthenticatedModule { }
