import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// clickCounter :number=0;

 info=new FormGroup({
   firstName:new FormControl("", Validators.required),
   lastName: new FormControl("", Validators.required),
   age: new FormControl("", Validators.required),
   email: new FormControl("", Validators.required),
 });

  // countClick(){
  //   this.clickCounter+= +10;
  // }
  Cars =[{
    name:"BMW",
    model: 1991,
    imge:"https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__340.jpg"
  },{
    name:"Minicoper",
    model:2021,
    imge:"https://cdn.pixabay.com/photo/2015/08/05/19/16/minicooper-876924__340.jpg"
  },{
    name:"audi",
    model:2019,
    imge: "https://cdn.pixabay.com/photo/2018/01/19/20/56/truck-3093197__340.png"
  },{
    name:"Volvo",
    model:1980,
    imge: "https://cdn.pixabay.com/photo/2017/08/20/20/31/fiat-500-2663078__340.jpg"
  }
];
constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   if(this.info.valid){
   var a =this.info.value;
   console.log(a)
 }
 }

}
