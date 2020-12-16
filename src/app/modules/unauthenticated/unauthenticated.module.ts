import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedComponent } from './unauthenticated.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    UnauthenticatedComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
            loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
          },
          {
            path: 'login',
            loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
          }
        ]
      }
    ]),
    TranslateModule
  ]
})
export class UnauthenticatedModule { }
