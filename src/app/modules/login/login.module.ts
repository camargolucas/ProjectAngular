import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class LoginModule { }
