import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewsarees',
  templateUrl: './viewsarees.component.html',
  styleUrls: ['./viewsarees.component.css']
})
export class ViewsareesComponent implements OnInit {
  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  updateForm: FormGroup;
  createForm:FormGroup;

  sareeDetails:any[]=[
    {id:"1",logo:"assets/images/saree1.jpg",company:"Mitera",product:"Peach-Coloured Art Silk Saree",cost:"Rs.650"},
    {id:"2",logo:"assets/images/saree2.jpg",company:"Inddus",product:"Burgundy Solid Ruffle Saree",cost:"Rs.1299"},
    {id:"3",logo:"assets/images/saree3.jpg",company:"Gosriki",product:"Navy Blue Viscose Rayon Saree",cost:"Rs.1350"},
    {id:"4",logo:"assets/images/saree4.jpg",company:"Gosriki",product:"Multi Printed Crepe Saree",cost:"Rs.2340"},
    {id:"5",logo:"assets/images/saree5.jpg",company:"Gosriki",product:"Black Art Silk Design Khadi Saree",cost:"Rs.944"},
    {id:"6",logo:"assets/images/saree6.jpg",company:"Mitera",product:"Black Colourblocked Silk Saree",cost:"Rs.2680"},
    {id:"7",logo:"assets/images/saree7.jpg",company:"Mimosa",product:"Off-White Kanjeevaram Saree",cost:"Rs.780"},
    {id:"8",logo:"assets/images/saree8.jpg",company:"Mimosa",product:"Navy Blue Art Silk Woven Saree",cost:"Rs.3450"},
    {id:"9",logo:"assets/images/saree9.jpg",company:"Saree mall",product:"Orange Embellished Saree",cost:"Rs.1799"},
    {id:"10",logo:"assets/images/saree10.jpg",company:"Saree mall",product:"Yellow Embellished Saree",cost:"Rs.1799"},
    {id:"11",logo:"assets/images/saree11.jpg",company:"Shaily",product:"Maroon Pure Silk Banarasi Saree",cost:"Rs.1799"}
    
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
let index = this.sareeDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
this.sareeDetails[index] = this.updateForm.value;
  console.log(this.updateForm.value);
   
 }

 deleteItem(m){
  var index = this.sareeDetails.indexOf(m);
  this.sareeDetails.splice(index,1);
  }

  addItem(){
    this.sareeDetails.push(this.createForm.value);
    console.log(this.sareeDetails);
    this.createForm.reset();
  }

}
