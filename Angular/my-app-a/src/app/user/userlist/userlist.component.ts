import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user-service/user.service";


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor( private service: UserService ) { }

  ngOnInit() {
  }

}
