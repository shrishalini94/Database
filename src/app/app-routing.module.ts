import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes=[
{
  path:'add', component: AddComponent  
},
{
  path:'edit/:id', component: EditComponent  
},
{
  path:'list', component: ListComponent  
},



]
@NgModule({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
