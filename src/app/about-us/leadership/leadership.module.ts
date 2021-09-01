import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipComponent } from './leadership.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: LeadershipComponent
  }
]

@NgModule({
  declarations: [
    LeadershipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class LeadershipModule { }
