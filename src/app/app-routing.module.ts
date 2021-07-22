import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Rx1Component } from './rx1/rx1.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'rx1',
    component: Rx1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
