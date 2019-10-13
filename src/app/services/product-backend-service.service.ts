import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { Price } from '../classes/price';
import { Inventory } from '../classes/inventory';
import { Promotion } from '../classes/promotion';
import { ProductView } from '../product-view';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductBackendServiceService {

  constructor(private http: HttpClient) { }

  saveProduct(product: Product): Observable<Product> {
    console.log(product)
    return this.http.post<Product>("http://localhost:1000/product/v1/products/", product, httpOptions);
  }
  
  updatePrice(price: Price, productId: number): Observable<any> {
    return this.http.put<any>("http://localhost:8099/price/v1/prices/" + productId, price, httpOptions);
  }
  updatePromotion(promotion: Promotion, productId: number): Observable<any> {
    return this.http.put<any>("http://localhost:8101/promotion/v1/promotions/" + productId, promotion, httpOptions);
  }
  updateInventory(inventory: Inventory, productId: number): Observable<any> {
    return this.http.put<any>("http://localhost:8100/inventory/v1/inventory/" + productId, inventory, httpOptions);
  }
  getProduct(productId: number): Observable<ProductView> {

    return this.http.get<ProductView>("http://localhost:8102/productview/v1/productView/" + productId);
  }

}
