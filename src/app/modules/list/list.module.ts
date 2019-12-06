import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ListModule { }
