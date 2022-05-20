import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sevices/user.service';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as fromUser from '../user.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  constructor(private userService: UserService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new UserActions.d)
    // this.userService.getUsers().subscribe(
    //   (res) => {
    //     this.users = res;
    //     console.log(this.users)
    //   });
  }

}
