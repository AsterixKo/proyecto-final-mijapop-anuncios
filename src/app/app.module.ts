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
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsSubcategoryComponent } from './core/components/products-subcategory/products-subcategory.component';
import { ProductsProvinceComponent } from './core/components/products-province/products-province.component';
import { ProductsTownComponent } from './core/components/products-town/products-town.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProvinceComponent } from './core/components/add-province/add-province.component';
import { AddCategoryComponent } from './core/components/add-category/add-category.component';
import { FooterWhoComponent } from './shared/components/footer-who/footer-who.component';
import { FooterPressComponent } from './shared/components/footer-press/footer-press.component';
import { FooterJobsComponent } from './shared/components/footer-jobs/footer-jobs.component';
import { FooterTeamComponent } from './shared/components/footer-team/footer-team.component';
import { FooterFrequentQuestionsComponent } from './shared/components/footer-frequent-questions/footer-frequent-questions.component';
import { FooterRulesComponent } from './shared/components/footer-rules/footer-rules.component';
import { FooterSecurityComponent } from './shared/components/footer-security/footer-security.component';
import { FooterConditionsComponent } from './shared/components/footer-conditions/footer-conditions.component';
import { FooterPrivacyComponent } from './shared/components/footer-privacy/footer-privacy.component';
import { FooterCookiesComponent } from './shared/components/footer-cookies/footer-cookies.component';
import { AddSubcategoryComponent } from './core/components/add-subcategory/add-subcategory.component';


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
    ProductsCategoryComponent,
    LoginComponent,
    LogoutComponent,
    ProductsSubcategoryComponent,
    ProductsProvinceComponent,
    ProductsTownComponent,
    AddProvinceComponent,
    AddCategoryComponent,
    FooterWhoComponent,
    FooterPressComponent,
    FooterJobsComponent,
    FooterTeamComponent,
    FooterFrequentQuestionsComponent,
    FooterRulesComponent,
    FooterSecurityComponent,
    FooterConditionsComponent,
    FooterPrivacyComponent,
    FooterCookiesComponent,
    AddSubcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
