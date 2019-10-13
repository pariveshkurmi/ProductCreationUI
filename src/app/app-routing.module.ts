import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductPromotionComponent } from './product-promotion/product-promotion.component';
import { ProductfirstpageComponent } from './productfirstpage/productfirstpage.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
    path:'',
    component:ProductfirstpageComponent
  },
  {
    path:'productView/:id',
    component:ProductViewComponent
  },
  {
    path:'productInventory/:id',
    component:ProductInventoryComponent
  },
  {
    path:'productPrice/:id',
    component:ProductPriceComponent
  },
  {
    path:'productPromotion/:id',
    component:ProductPromotionComponent
  },
  {
    path:'productCreate',
    component:ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
