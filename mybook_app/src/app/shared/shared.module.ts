import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NotfoundComponent,
    ToolbarComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[ToolbarComponent, FooterComponent, MaterialModule]
})
export class SharedModule { }
