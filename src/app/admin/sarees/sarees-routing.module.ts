import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsareesComponent } from './viewsarees/viewsarees.component';
// import { BeautyComponent } from './beauty/beauty.component';
// import { ChuridarsComponent } from './churidars/churidars.component';
// import { EthnicComponent } from './ethnic/ethnic.component';
// import { JeansComponent } from './jeans/jeans.component';
// import { KurtasComponent } from './kurtas/kurtas.component';
// import { SareesComponent } from './sarees/sarees.component';





const routes:Routes = [
   
    {
        path: 'view',
        component: ViewsareesComponent, 
    }
    // {
    //     path: 'churidars',
    //     component: ChuridarsComponent, 
    // },
    // {
    //     path: 'ethnic',
    //     component: EthnicComponent, 
    // },
    // {
    //     path: 'jeans',
    //     component: JeansComponent, 
    // },
    // {
    //     path: 'kurtas',
    //     component: KurtasComponent, 
    // },
    // {
    //     path: 'sarees',
    //     component: SareesComponent, 
    // }
   
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SareesRoutingModule {}