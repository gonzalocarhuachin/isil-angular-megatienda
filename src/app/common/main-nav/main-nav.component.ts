import { Component, OnInit } from '@angular/core';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}