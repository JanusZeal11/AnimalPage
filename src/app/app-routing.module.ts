import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalPageComponent } from './container/animal-page/animal-page.component';

const routes: Routes = [
  { path: '', component: AnimalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
