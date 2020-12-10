import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


export const routes: Routes = [{
  path: '',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'login'
        },
         {
          path: 'login',
           loadChildren: () => import('./../modules/login/login.module').then(m => m.LoginModule)
         }
        ]
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
