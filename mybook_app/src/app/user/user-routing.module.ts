import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { RemoveBooksComponent } from './component/remove-books/remove-books.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'add-book', component: AddBooksComponent },
      { path: 'remove-book', component: RemoveBooksComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class UserRoutingModule { }
