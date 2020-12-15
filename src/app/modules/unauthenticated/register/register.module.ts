import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UnauthenticatedComponent} from '../unauthenticated.component';
import {LoginComponent} from '../login/login.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [RegisterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: RegisterComponent,
            },
            {
                path: 'verify-email',
                loadChildren: () => import('./verify-email/verify-email.module').then(m => m.VerifyEmailModule)
            }
        ]),
        TranslateModule
    ]
})
export class RegisterModule { }
