import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurCompanyComponent } from './our-company.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: OurCompanyComponent
  }
]

@NgModule({
  declarations: [
    OurCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class OurCompanyModule { }
