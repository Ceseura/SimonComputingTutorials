import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private myValue = "Hello";
  private getCount() { return 10 };	
  private myObject = { firstName: "John", lastName: "Doe" };
  private today = new Date(2017, 5, 3);
  private format = "MM/dd";
  private className = "color2";
  private hideMe = null;

  private colors = [ "red", "green", "blue" ];

  onButton1Click() {
    alert("Clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
