import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthnicRoutingModule } from './ethnic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// import { BeautyComponent } from './beauty/beauty.component';
// import { ChuridarsComponent } from './churidars/churidars.component';
// import { EthnicComponent } from './ethnic/ethnic.component';
// import { JeansComponent } from './jeans/jeans.component';
// import { KurtasComponent } from './kurtas/kurtas.component';
// import { SareesComponent } from './sarees/sarees.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewethnicComponent } from './viewethnic/viewethnic.component';



@NgModule({
  declarations: [ViewethnicComponent],
  imports: [
    CommonModule,EthnicRoutingModule,NgbDropdownModule,FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule
    
  ]
})


export class EthnicModule { }