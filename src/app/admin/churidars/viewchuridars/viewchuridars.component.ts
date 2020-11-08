import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewchuridars',
  templateUrl: './viewchuridars.component.html',
  styleUrls: ['./viewchuridars.component.css']
})
export class ViewchuridarsComponent implements OnInit {

  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  updateForm: FormGroup;
  createForm: FormGroup;

  churidarDetails:any[]=[
    {id:"1",logo:"assets/images/churidar1.jpg",company:"Libas",product:"Women Red & Golden Churidar",cost:"Rs.1740"},
    {id:"2",logo:"assets/images/churidar2.jpg",company:"Vishudh",product:"Women Peach Churidar",cost:"Rs.1299"},
    {id:"3",logo:"assets/images/churidar3.jpg",company:"Biba",product:"Women White & Red Churidar",cost:"Rs.1350"},
    {id:"4",logo:"assets/images/churidar4.jpg",company:"Biba",product:"Mustard Handloom Churidar",cost:"Rs.2340"},
    {id:"5",logo:"assets/images/churidar5.jpg",company:"Nayo",product:"Women Blue & Printed Churidar",cost:"Rs.944"},
    {id:"6",logo:"assets/images/churidar6.jpg",company:"Janasya",product:"Women Blue Printed Churidar",cost:"Rs.2680"},
    {id:"7",logo:"assets/images/churidar7.jpg",company:"Anouk",product:"Women Black & Maroon Churidar",cost:"Rs.780"},
    {id:"8",logo:"assets/images/churidar8.jpg",company:"Libas",product:"Women Pink & Cream Churidar",cost:"Rs.3450"},
    {id:"9",logo:"assets/images/churidar9.jpg",company:"Anouk",product:"Women Green & Orange Churidar",cost:"Rs.1799"},
    {id:"10",logo:"assets/images/churidar10.jpg",company:"Sangria",product:"Pink & Yoke Design Churidar",cost:"Rs.3450"},
    {id:"11",logo:"assets/images/churidar11.jpg",company:"Imara",product:"Olive Green Printed Churidar",cost:"Rs.2950"}
   

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
  let index = this.churidarDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
  this.churidarDetails[index] = this.updateForm.value;
  console.log(this.updateForm.value);
 }

 deleteItem(m){
  var index = this.churidarDetails.indexOf(m);
  this.churidarDetails.splice(index,1);
  }

  addItem(){
    this.churidarDetails.push(this.createForm.value);
    console.log(this.churidarDetails);
    this.createForm.reset();
  }

}
