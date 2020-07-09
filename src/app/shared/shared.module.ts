import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RemoveCommaPipe } from './pipes/remove-comma.pipe';

@NgModule({
  declarations: [
    NavMenuComponent,
    RemoveCommaPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    NavMenuComponent,
    RemoveCommaPipe,
  ],
  providers: [
    RemoveCommaPipe,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
