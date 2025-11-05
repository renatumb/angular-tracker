import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './components/tasks/tasks.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path:'', title:'Tasks', component: TasksComponent},
  {path:'about', title:'About ', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
