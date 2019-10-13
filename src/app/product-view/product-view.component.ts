import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBackendServiceService } from '../services/product-backend-service.service';
import { Product } from '../classes/product';
import { ProductView } from '../product-view';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProductBackendServiceService, private router: Router,private spinnerService: Ng4LoadingSpinnerService) { }

  productId: number;
  product: ProductView;
  brand: string
  color: string
  noOfstocks: string
  price: string
  productName: string
  promotionCode: string
  size: string

  getAllrouteVariables() {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getAllrouteVariables();
    this.spinnerService.show();
    setTimeout(() => {
      this.service.getProduct(this.productId).subscribe(data => {
        console.log(data)
        this.brand = data.brand;
        this.color = data.color;
        this.promotionCode = data.promotionCode;
        this.price = data.price;
        this.productName = data.productName;
        this.size = data.size;
        this.noOfstocks = data.noOfstocks
      });

    }, 0);

  }

  onClick() {
    this.router.navigate(['']);
  }

}
