import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewbeauty',
  templateUrl: './viewbeauty.component.html',
  styleUrls: ['./viewbeauty.component.css']
})
export class ViewbeautyComponent implements OnInit {



  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  createForm: FormGroup;

  updateForm: FormGroup;
  beautyDetails:any[]=[
    {id:"1",logo:"assets/images/beauty1.jpg",company:"WOW",product:"Onion Black Seed Hair Oil",cost:"Rs.250",like:""},
    {id:"2",logo:"assets/images/beauty2.jpg",company:"LOreal",product:"Creme Triple Care Hair Color",cost:"Rs.250"},
    {id:"3",logo:"assets/images/beauty3.jpg",company:"Maybelline",product:"Super Stay Matte",cost:"Rs.250"},
    {id:"4",logo:"assets/images/beauty4.jpg",company:"LAKME",product:"9To5 Primer Matte Lipstick",cost:"Rs.250"},
    {id:"5",logo:"assets/images/beauty5.jpg",company:"LAKME",product:"9to5 Weightless Plum Feather Lip",cost:"Rs.250"},
    {id:"6",logo:"assets/images/beauty6.jpg",company:"MAC",product:"Studio Fix Fluid SPF 15",cost:"Rs.250"},
    {id:"7",logo:"assets/images/beauty7.jpg",company:"Fit Me",product:"Skin-Fit Powder Foundation",cost:"Rs.250"},
    {id:"8",logo:"assets/images/beauty8.jpg",company:"LOreal",product:"Liner Magique",cost:"Rs.250"},
    {id:"9",logo:"assets/images/beauty9.jpg",company:"Matte",product:"Black Liquid Eyeliner",cost:"Rs.250"},
    {id:"10",logo:"assets/images/beauty10.jpg",company:"Temptu",product:"Liquid Foundation",cost:"Rs.250"}

];

  constructor() { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      company: new FormControl,
      product: new FormControl,
      cost: new FormControl,
      id: new FormControl,
      logo: new FormControl,
    });

    this.createForm = new FormGroup({
      company: new FormControl,
      product: new FormControl,
      cost: new FormControl,
      id: new FormControl,
      logo: new FormControl,
    });
  }


openModal(d){
  
this.logo=d.logo;
this.company=d.company;
this.product=d.product;
this.cost=d.cost;
  }

  editModal(e){
    this.id=e.id;
    this.company=e.company;
    this.product=e.product;
    this.cost=e.cost;
    this.logo=e.logo;

  }

  editCard() {
  
    //console.log(i);
let index = this.beautyDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
this.beautyDetails[index] = this.updateForm.value;
console.log(this.updateForm.value);
   
}

deleteItem(m){
var index = this.beautyDetails.indexOf(m);
this.beautyDetails.splice(index,1);
}

addItem(){
  this.beautyDetails.push(this.createForm.value);
  console.log(this.beautyDetails);
  this.createForm.reset();
}

}
