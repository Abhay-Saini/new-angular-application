import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { RemoveBooksComponent } from './component/remove-books/remove-books.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    AddBooksComponent,
    RemoveBooksComponent
  ],
  imports: [
    UserRoutingModule
  ]
})
export class UserModule { }
