import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefsComponent } from './chefOrchestre/chefs/chefs.component';
import { UpdateChefComponent } from './chefOrchestre/update-chef/update-chef.component';
import { FormChefComponent } from './chefOrchestre/form-chef/form-chef.component';

const routes: Routes = [
  {path:"chefs", component:ChefsComponent},
  {path:"updateChef/:id", component:UpdateChefComponent},

  {path:"formChef", component:FormChefComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
