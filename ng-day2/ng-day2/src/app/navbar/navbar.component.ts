import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clickCounter :number=0;
  projectName:string;

  constructor() {
    this.projectName= "Car Shope";
   }
   countClick(){
    this.clickCounter+= +10;
  }

  ngOnInit(): void {
  }

}
