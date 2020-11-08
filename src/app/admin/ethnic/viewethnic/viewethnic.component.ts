import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewethnic',
  templateUrl: './viewethnic.component.html',
  styleUrls: ['./viewethnic.component.css']
})
export class ViewethnicComponent implements OnInit {

  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  updateForm: FormGroup;
  createForm: FormGroup;


  ethnicDetails:any[]=[
    {id:"1",logo:"assets/images/ethnic1.jpg",company:"HERE & NOW",product:"Yellow & Red Empire Dress",cost:"Rs.650"},
    {id:"2",logo:"assets/images/ethnic2.jpg",company:"HERE & NOW",product:"Women Navy Printed Maxi Dress",cost:"Rs.1299"},
    {id:"3",logo:"assets/images/ethnic3.jpg",company:"Vishudh",product:"Women Floral Embroidered Dress",cost:"Rs.1350"},
    {id:"4",logo:"assets/images/ethnic4.jpg",company:"GERUA",product:"Women Floral Print Maxi Dress",cost:"Rs.2340"},
    {id:"5",logo:"assets/images/ethnic5.jpg",company:"INDYA",product:"Foil Slit with Attached Skirt",cost:"Rs.944"},
    {id:"6",logo:"assets/images/ethnic6.jpg",company:"Sangria",product:"Women Pink Fit and Flare Dress",cost:"Rs.2680"},
    {id:"7",logo:"assets/images/ethnic7.jpg",company:"Vishudh",product:"Grey Checked Maxi Dress",cost:"Rs.780"},
    {id:"8",logo:"assets/images/ethnic8.jpg",company:"INDYA",product:"Women Pink & Red Floral Dress",cost:"Rs.3450"},
    {id:"9",logo:"assets/images/ethnic9.jpg",company:"GERUA",product:"Black Checked Flare Dress",cost:"Rs.1799"},
    {id:"10",logo:"assets/images/ethnic10.jpg",company:"Vishudh",product:"Women Mustard Yellow Dress",cost:"Rs.1799"},
    {id:"11",logo:"assets/images/ethnic11.jpg",company:"Sangria",product:"Women Navy Blue Printed Dress",cost:"Rs.1799"}
    
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
let index = this.ethnicDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
this.ethnicDetails[index] = this.updateForm.value;
  console.log(this.updateForm.value);
   
  }

  deleteItem(m){
    var index = this.ethnicDetails.indexOf(m);
    this.ethnicDetails.splice(index,1);
    }

    addItem(){
      this.ethnicDetails.push(this.createForm.value);
      console.log(this.ethnicDetails);
      this.createForm.reset();
    }

}
