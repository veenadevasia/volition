import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewjeans',
  templateUrl: './viewjeans.component.html',
  styleUrls: ['./viewjeans.component.css']
})
export class ViewjeansComponent implements OnInit {

  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  updateForm: FormGroup;
  createForm: FormGroup;

  jeansDetails:any[]=[
    {id:"1",logo:"assets/images/jeans1.jpg",company:"Marks & Spencer",product:"Women Blue Solid Treggings",cost:"Rs.650"},
    {id:"2",logo:"assets/images/jeans2.jpg",company:"Marks & Spencer",product:"Women Navy Blue Solid Jeggings",cost:"Rs.1299"},
    {id:"3",logo:"assets/images/jeans3.jpg",company:"H & M",product:"Blue Shaping Skinny Jeans",cost:"Rs.1350"},
    {id:"4",logo:"assets/images/jeans4.jpg",company:"H & M",product:"Grey Shaping Skinny Jeans",cost:"Rs.2340"},
    {id:"5",logo:"assets/images/jeans5.jpg",company:"Marks & Spencer",product:"Grey Super Skinny Fit Jeggings",cost:"Rs.944"},
    {id:"6",logo:"assets/images/jeans6.jpg",company:"Mast & Harbour",product:"Women Black Skinny Fit Jeans",cost:"Rs.2680"},
    {id:"7",logo:"assets/images/jeans7.jpg",company:"Mast & Harbour",product:"Women Fit Stretchable Jeans",cost:"Rs.780"},
    {id:"8",logo:"assets/images/jeans8.jpg",company:"SASSAFRAS",product:"Women Burgundy Slim Treggings",cost:"Rs.3450"},
    {id:"9",logo:"assets/images/jean9.jpg",company:"Roadster",product:"Skinny Look Cropped Jeans",cost:"Rs.1799"}
    
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
    //this.name = d.name;
    //this.city = d.city;
    //this.state = d.state;
    //this.gmail = d.gmail;
    //this.address = d.address;
    //this.id = d.id;
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
let index = this.jeansDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
this.jeansDetails[index] = this.updateForm.value;
  console.log(this.updateForm.value);
}

deleteItem(m){
  var index = this.jeansDetails.indexOf(m);
  this.jeansDetails.splice(index,1);
  }

  addItem(){
    this.jeansDetails.push(this.createForm.value);
    console.log(this.jeansDetails);
    this.createForm.reset();
  }
}
