import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate:[AuthGuard]

  }]



@NgModule({
  declarations: [EmployeeComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    MaterialModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  // exports:[RouterModule.forChild({routes})]
})
export class EmployeeModule { }
