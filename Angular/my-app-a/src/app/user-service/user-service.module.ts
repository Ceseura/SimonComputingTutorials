import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';        // <-- Add this line

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[UserService],                          // <-- Add this line
  exports: [UserListComponent],
  declarations: [UserListComponent]
})
export class UserServiceModule { }
