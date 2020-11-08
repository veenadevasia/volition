import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
    {
        
        path: '',
        component: AdminComponent,
        children: [
            
             { path: "beauty", loadChildren: () => import('./beauty/beauty.module').then(m => m.BeautyModule) },
             { path: "churidars", loadChildren: () => import('./churidars/churidars.module').then(m => m.ChuridarsModule) },
             { path: "kurtas", loadChildren: () => import('./kurtas/kurtas.module').then(m => m.KurtasModule) },
             { path: "sarees", loadChildren: () => import('./sarees/sarees.module').then(m => m.SareesModule) },
             { path: "jeans", loadChildren: () => import('./jeans/jeans.module').then(m => m.JeansModule) },
             { path: "ethnic", loadChildren: () => import('./ethnic/ethnic.module').then(m => m.EthnicModule) }


              ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}