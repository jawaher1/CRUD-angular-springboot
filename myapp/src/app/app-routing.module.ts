import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionComponent} from '../app/gestion/gestion.component'


const routes: Routes = [   
    {
      path: 'Gestion',
      component:GestionComponent
      
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
