import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefautComponent } from './layouts/defaut/defaut.component';
import { CandidateComponent } from './modules/candidate/candidate.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [{
  path: '',
  component: DefautComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
     {
     path: 'user',
      component: UserComponent,
     }
     ,
     {
     path: 'candidate',
      component: CandidateComponent,
     }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
