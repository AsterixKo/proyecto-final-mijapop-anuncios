import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MyProductsSoldComponent } from './core/components/my-products-sold/my-products-sold.component';
import { MyProductsMarketComponent } from './core/components/my-products-market/my-products-market.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { FavoritesComponent } from './core/components/favorites/favorites.component';
import { UploadProductComponent } from './core/components/upload-product/upload-product.component';
import { SearchComponent } from './core/components/search/search.component';
import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductCardComponent } from './core/components/product-card/product-card.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ProductsCategoryComponent } from './core/components/products-category/products-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyProductsSoldComponent,
    MyProductsMarketComponent,
    ProfileComponent,
    FavoritesComponent,
    UploadProductComponent,
    SearchComponent,
    ProductDetailComponent,
    ProductCardComponent,
    MessagesComponent,
    RegisterComponent,
    ProductsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
