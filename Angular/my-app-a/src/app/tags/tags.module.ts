import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NotFoundComponent],
  declarations: [HeaderComponent, NotFoundComponent]
})
export class TagsModule { }
