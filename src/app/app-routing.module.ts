import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {FavorisComponent} from './components/favoris/favoris.component';
import {ShoppingComponent} from './components/shopping/shopping.component';


const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'favoris',
    component: FavorisComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: '**',
    redirectTo: 'account'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
