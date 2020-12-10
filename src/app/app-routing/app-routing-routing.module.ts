import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


export const routes: Routes = [{
  path: '',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'unauthenticated'
        },
         {
          path: 'unauthenticated',
           loadChildren: () => import('./../modules/unauthenticated/unauthenticated.module').then(m => m.UnauthenticatedModule)
         }
        ]
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
