import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistredComponent } from './registred/registred.component';


const routes: Routes = [
  {
    path:'',
    component:RegistredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
