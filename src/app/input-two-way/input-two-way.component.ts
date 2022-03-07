import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-two-way',
  templateUrl: './input-two-way.component.html',
  styleUrls: ['./input-two-way.component.css']
})
export class InputTwoWayComponent implements OnInit {

  texto = 'Escribe aquí';

  constructor() { }

  ngOnInit(): void {
  }

}
