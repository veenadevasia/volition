import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewkurtas',
  templateUrl: './viewkurtas.component.html',
  styleUrls: ['./viewkurtas.component.css']
})
export class ViewkurtasComponent implements OnInit {

 
  item:any;
  logo:any;
  company:any;
  product:any;
  cost:any;
  id:any;
  updateForm: FormGroup;
  createForm: FormGroup;

  kurtasDetails:any[]=[
    {id:"1",logo:"assets/images/kurtas1.jpg",company:"Libas",product:"Printed A-Line Kurti",cost:"Rs.650"},
    {id:"2",logo:"assets/images/kurtas2.jpg",company:"Vishudh",product:"Women Yoke Design Kurta",cost:"Rs.1299"},
    {id:"3",logo:"assets/images/kurtas3.jpg",company:"Biba",product:"Women Embroidered Kurta",cost:"Rs.1350"},
    {id:"4",logo:"assets/images/kurtas4.jpg",company:"Biba",product:"Solid Straight Kurta",cost:"Rs.2340"},
    {id:"5",logo:"assets/images/kurtas5.jpg",company:"Nayo",product:"Women Printed Kurta",cost:"Rs.944"},
    {id:"6",logo:"assets/images/kurtas6.jpg",company:"Janasya",product:"Women Kurta with Palazzo",cost:"Rs.2680"},
    {id:"7",logo:"assets/images/kurtas7.jpg",company:"Anouk",product:"Printed A-Line Kurta",cost:"Rs.780"},
    {id:"8",logo:"assets/images/kurtas8.jpg",company:"Libas",product:"Printed A-Line Kurta with Palazzo",cost:"Rs.3450"},
    {id:"9",logo:"assets/images/kurtas9.jpg",company:"Anouk",product:"Printed Pleated Detail Kurta",cost:"Rs.1799"},
    {id:"10",logo:"assets/images/kurtas10.jpg",company:"Sangria",product:"Assymetric Anarkali Kurta",cost:"Rs.3450"},
    {id:"11",logo:"assets/images/kurtas11.jpg",company:"Imara",product:"Printed Straight Kurta",cost:"Rs.2950"},
    {id:"12",logo:"assets/images/kurtas12.jpg",company:"Sangria",product:"Floral Yoke Design Kurta",cost:"Rs.3900"},
    {id:"13",logo:"assets/images/kurtas13.jpg",company:"Nayo",product:"Solid Pathani Kurta",cost:"Rs.2250"},
    {id:"14",logo:"assets/images/kurtas14.jpg",company:"Libas",product:"Printed Fusion A-Line Kurta",cost:"Rs.839"},
    {id:"15",logo:"assets/images/kurtas15.jpg",company:"Vishudh",product:"Women Printed Kurta",cost:"Rs.680"},
    {id:"16",logo:"assets/images/kurtas16.jpg",company:"Imara",product:"Women Yoke Design Kurta",cost:"Rs.1789"},
    {id:"17",logo:"assets/images/kurtas17.jpg",company:"Nayo",product:"Floral Yoke Design Kurta",cost:"Rs.2134"},

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
let index = this.kurtasDetails.findIndex(updateForm => updateForm.id === this.updateForm.value.id);
this.kurtasDetails[index] = this.updateForm.value;
  console.log(this.updateForm.value);
}

deleteItem(m){
  var index = this.kurtasDetails.indexOf(m);
  this.kurtasDetails.splice(index,1);
  }

  addItem(){
    this.kurtasDetails.push(this.createForm.value);
    console.log(this.kurtasDetails);
    this.createForm.reset();
  }

}
