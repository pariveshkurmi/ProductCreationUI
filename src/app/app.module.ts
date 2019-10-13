import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { ProductPromotionComponent } from './product-promotion/product-promotion.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductfirstpageComponent } from './productfirstpage/productfirstpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductPriceComponent,
    ProductInventoryComponent,
    ProductPromotionComponent,
    ProductCreateComponent,
    ProductfirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
