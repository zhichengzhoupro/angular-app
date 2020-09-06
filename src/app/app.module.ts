import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import {StorageService} from './services/storage.service';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FormComponent,
    SearchComponent,
    ShoppingComponent,
    FavorisComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
