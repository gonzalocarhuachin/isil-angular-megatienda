import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  frase = "En momentos de crisis sólo la imaginación es superior a la inteligencia";
  autor = "Albert Einstein";
  bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro architecto recusandae a fuga aspernatur. Praesentium natus dicta, consectetur ipsum error nesciunt optio simil";

  constructor() { }

  ngOnInit(): void {
  }

}
