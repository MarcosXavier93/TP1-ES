import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'TP01-ES-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
