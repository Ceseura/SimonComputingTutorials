import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "app/user-service/user.service"
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/RX';

import { roles, states, titles, User } from 'app/user-service/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  states = states;
  roles = roles;
  titles = titles;

  private userForm: FormGroup;
  private deleteBar: FormGroup;

  error = null;

  private userId: string;
  private mode: string;
  private paramSubscription: any;
  private title: string = "Add User";

  constructor(private fb: FormBuilder, 
              private service: UserService, 
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  modifyUser() {
    if (this.mode === 'update-user') {
      this.error = this.service.updateUser(this.userForm.value);
    } else if (this.mode === 'delete-user') {
      //this.error = this.userId + this.deleteBar.get('deleteMe').value;
      if (this.deleteBar.get('deleteMe').value === this.userId) {
        this.error = this.service.deleteUser(this.userId);
      }
      else {
        this.error = "Please type the user's ID in the indicated field.";
      }
    } else {
      this.error = this.service.addUser(this.userForm.value);
    }

    if (this.error) {
      this.delayedClear();
      return;
    }

    this.router.navigate( ['/userlist'] );
  }

  delayedClear() {
    let timer = Observable.timer( 5000 );
    timer.subscribe( x => this.error = null );
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      userId: [ '', Validators.required ],
      firstName: '',
      lastName: [ '', Validators.required ],
      role: '',
      title: '',
      active: true,

      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
    });

    this.deleteBar = this.fb.group({
      deleteMe: '',
    })

    this.paramSubscription = this.activatedRoute.params.subscribe( this.processParams );
  }
  processParams = ( params ) => {
    this.userId = params['userId'];
    this.mode = params['mode'];

    // Exit if userId is null (new user)
    //if (!this.userId) return;
    if (!this.mode) {
      this.title = 'Add User';
      this.mode = 'add-user';
    }
    
    console.log("Mode: " + this.mode);
    console.log( "Working on UserID = " + this.userId );

    // Set title of the panel
    if (this.mode === 'update-user') this.title = `Update User`;
    if (this.mode === 'delete-user') this.title = `Delete User`;

    let user = this.service.getUser(this.userId);
    if (!user) {
      // This should never happen?
      this.error = `User ID="${this.userId}" could not be found.`;
      this.delayedClear();
      return;
    } 

    this.userForm.setValue(user);
  }

  ngOnDestroy() {
    if (this.paramSubscription) this.paramSubscription.unsubscribe();
  }
}
