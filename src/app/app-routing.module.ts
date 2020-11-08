import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
//import { AdminComponent } from './admin/admin.component';
//import { UserComponent } from './user/user.component';

import { AuthGuard } from './_guards';
//import { Role } from './_models';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
   
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

    
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}