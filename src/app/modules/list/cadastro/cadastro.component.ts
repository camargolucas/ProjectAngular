import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  isRegistred = false
  constructor() { }

  ngOnInit() {
  }

  setIsRegistred(value) {
    this.isRegistred = value
  }
  getIsRegistred() {
    return this.isRegistred
  }
}
