import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppersComponent } from './toppers/toppers.component';
import { UsersComponent } from './users/users.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  {path:"", redirectTo:'user',pathMatch:'full'},
  {path:"user",component:UsersComponent},
  {path:"winner",component:WinnersComponent},
  {path:"topper",component:ToppersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
