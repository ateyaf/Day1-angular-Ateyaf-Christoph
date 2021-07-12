import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectName:string;
  constructor() {
    this.projectName = "Hallo Summer";
   }

  ngOnInit(): void {
  }

}
