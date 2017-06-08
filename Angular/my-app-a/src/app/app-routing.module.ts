import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "app/user/user/user.component";
import { UserlistComponent } from "app/user/userlist/userlist.component";
import { NotFoundComponent } from "app/tags/not-found/not-found.component";

const routes: Routes = [
  { path: ':mode/:userId', component: UserComponent },
  { path: 'add-user', component: UserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
