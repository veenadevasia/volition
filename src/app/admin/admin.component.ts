import { Component, OnInit } from '@angular/core';
// import { first } from 'rxjs/operators';

// import { User } from '../_models';
// import { UserService } from '../_services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  collapedSideBar : boolean;

    constructor() {}

    ngOnInit() {
        // this.userService.getAll().pipe(first()).subscribe(users => { 
        //     this.users = users; 
        // });
    }

    receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }


}
