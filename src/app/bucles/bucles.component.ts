import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css'],
})
export class BuclesComponent implements OnInit {
  personas: Persona[] = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 35 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
