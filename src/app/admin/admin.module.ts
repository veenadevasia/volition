import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { ViewchuridarsComponent } from './churidars/viewchuridars/viewchuridars.component';
// import { ViewsareesComponent } from './sarees/viewsarees/viewsarees.component';
// import { ViewethnicComponent } from './ethnic/viewethnic/viewethnic.component';
// import { ViewkurtasComponent } from './kurtas/viewkurtas/viewkurtas.component';
// import { ViewjeansComponent } from './jeans/viewjeans/viewjeans.component';
// import { BeautyComponent } from './beauty/beauty.component';
// import { KurtasComponent } from './kurtas/kurtas.component';
// import { ChuridarsComponent } from './churidars/churidars.component';
// import { SareesComponent } from './sarees/sarees.component';
// import { JeansComponent } from './jeans/jeans.component';
// import { EthnicComponent } from './ethnic/ethnic.component';
//import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [AdminComponent, SidebarComponent]
})
export class AdminModule {}
