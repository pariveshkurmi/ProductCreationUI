import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBackendServiceService } from '../services/product-backend-service.service';
import { Promotion } from '../classes/promotion';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-product-promotion',
  templateUrl: './product-promotion.component.html',
  styleUrls: ['./product-promotion.component.css']
})
export class ProductPromotionComponent implements OnInit {

  promotionForm:FormGroup;
  productId:number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductBackendServiceService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  ngOnInit() {
    this.setup();
    this.getAllrouteVariables();
  }
  getAllrouteVariables() {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }
  setup()
  {
    this.promotionForm=this.fb.group({
      promotionCode:[''],
      expiryStatus:[''],
      expiryDate:['']
    })
  }
  promotion:Promotion;
  onSubmit()
  {
this.spinnerService.show();
    console.log(this.promotionForm.value);
    this.service.updatePromotion(this.promotionForm.value,this.productId).subscribe(data=>this.promotion=data);
    setTimeout(() => {
      console.log(this.promotion);
      this.router.navigate(['productView',this.productId])
    }, 5000);
  }
}
