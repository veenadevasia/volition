import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
//import { CeiboShare } from 'ng2-social-share';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
//import {MatButtonModule,MatIconModule} from '@angular/material'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { SidebarComponent } from './admin/components/sidebar/sidebar.component';



@NgModule({
    imports: [
        BrowserModule,
        NgbDropdownModule, 
        MatButtonModule,
        MatIconModule,
        NgbModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        HttpClientModule,
        
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
        
       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }