import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './core/components/favorites/favorites.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { MyProductsMarketComponent } from './core/components/my-products-market/my-products-market.component';
import { MyProductsSoldComponent } from './core/components/my-products-sold/my-products-sold.component';
import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductsCategoryComponent } from './core/components/products-category/products-category.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { RegisterComponent } from './core/components/register/register.component';
import { SearchComponent } from './core/components/search/search.component';
import { UploadProductComponent } from './core/components/upload-product/upload-product.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'my-products-market', component: MyProductsMarketComponent, canActivate: [AuthGuard] },
  { path: 'my-products-sold', component: MyProductsSoldComponent, canActivate: [AuthGuard] },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'products-category', component: ProductsCategoryComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload-product', component: UploadProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
