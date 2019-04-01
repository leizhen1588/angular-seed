import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component'
import {ChildComponent} from './child/child.component'
const routes: Routes = [
  {
    path:'child',component:ChildComponent
  },
  {
    path:'login',component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
