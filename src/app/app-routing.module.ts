import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './core/components/add-category/add-category.component';
import { AddProductStatusComponent } from './core/components/add-product-status/add-product-status.component';
import { AddProvinceComponent } from './core/components/add-province/add-province.component';
import { AddSubcategoryComponent } from './core/components/add-subcategory/add-subcategory.component';
import { FavoritesComponent } from './core/components/favorites/favorites.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { MyProductsMarketComponent } from './core/components/my-products-market/my-products-market.component';
import { MyProductsSoldComponent } from './core/components/my-products-sold/my-products-sold.component';
import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductsCategoryComponent } from './core/components/products-category/products-category.component';
import { ProductsProvinceComponent } from './core/components/products-province/products-province.component';
import { ProductsSubcategoryComponent } from './core/components/products-subcategory/products-subcategory.component';
import { ProductsTownComponent } from './core/components/products-town/products-town.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { RegisterComponent } from './core/components/register/register.component';
import { SearchComponent } from './core/components/search/search.component';
import { UploadProductComponent } from './core/components/upload-product/upload-product.component';
import { AuthGuard } from './guards/auth.guard';
import { FooterConditionsComponent } from './shared/components/footer-conditions/footer-conditions.component';
import { FooterCookiesComponent } from './shared/components/footer-cookies/footer-cookies.component';
import { FooterFrequentQuestionsComponent } from './shared/components/footer-frequent-questions/footer-frequent-questions.component';
import { FooterJobsComponent } from './shared/components/footer-jobs/footer-jobs.component';
import { FooterPressComponent } from './shared/components/footer-press/footer-press.component';
import { FooterPrivacyComponent } from './shared/components/footer-privacy/footer-privacy.component';
import { FooterRulesComponent } from './shared/components/footer-rules/footer-rules.component';
import { FooterSecurityComponent } from './shared/components/footer-security/footer-security.component';
import { FooterTeamComponent } from './shared/components/footer-team/footer-team.component';
import { FooterWhoComponent } from './shared/components/footer-who/footer-who.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'my-products-market', component: MyProductsMarketComponent, canActivate: [AuthGuard] },
  { path: 'my-products-sold', component: MyProductsSoldComponent, canActivate: [AuthGuard] },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'products-category/:category', component: ProductsCategoryComponent },
  { path: 'products-subcategory/:subcategory', component: ProductsSubcategoryComponent },
  { path: 'products-province/:province', component: ProductsProvinceComponent },
  { path: 'products-town/:town', component: ProductsTownComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'search/:q', component: SearchComponent },
  { path: 'upload-product', component: UploadProductComponent, canActivate: [AuthGuard] },
  { path: 'add-province', component: AddProvinceComponent, canActivate: [AuthGuard] },
  { path: 'add-category', component: AddCategoryComponent, canActivate: [AuthGuard] },
  { path: 'add-subcategory', component: AddSubcategoryComponent, canActivate: [AuthGuard] },
  { path: 'add-product-status', component: AddProductStatusComponent, canActivate: [AuthGuard] },
  { path: 'footer-who', component: FooterWhoComponent },
  { path: 'footer-press', component: FooterPressComponent },
  { path: 'footer-jobs', component: FooterJobsComponent },
  { path: 'footer-team', component: FooterTeamComponent },
  { path: 'footer-frequent-questions', component: FooterFrequentQuestionsComponent },
  { path: 'footer-rules', component: FooterRulesComponent },
  { path: 'footer-security', component: FooterSecurityComponent },
  { path: 'footer-conditions', component: FooterConditionsComponent },
  { path: 'footer-privacy', component: FooterPrivacyComponent },
  { path: 'footer-cookies', component: FooterCookiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
