import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

  import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component: HomeComponent},
  {path:"card/details/:id",component:DetailsComponent},
  {path:"card",component:CardComponent},
  {path:"card/details/:id/cart/:id",component:CartComponent},
  {path:"cart", component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
