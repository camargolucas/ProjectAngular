import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { RegistredComponent } from './registred/registred.component';



@NgModule({
  declarations: [RegistredComponent],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
