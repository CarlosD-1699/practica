import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  text_color: string = '';
  button_disabled: boolean = false;

  src: string =
    'https://images.pexels.com/photos/18015250/pexels-photo-18015250/free-photo-of-la-escultura-de-piedra-mas-alta-de-europa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
}
