import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VerifyEmailComponent} from './verify-email.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [VerifyEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VerifyEmailComponent,
      }
    ])
  ]
})
export class VerifyEmailModule { }
