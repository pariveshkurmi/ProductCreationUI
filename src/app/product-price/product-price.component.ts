import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductBackendServiceService } from '../services/product-backend-service.service';
import { Price } from '../classes/price';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductBackendServiceService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }
  priceForm: FormGroup;
  productId: number;
  price: Price;
  ngOnInit() {
    this.getAllrouteVariables();
    this.setup();
  }
  getAllrouteVariables() {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }
  setup() {
    this.priceForm = this.fb.group({
      price: ['']
    })
  }
  onSubmit() {
    this.spinnerService.show();
    console.log(this.priceForm.value)
    this.service.updatePrice(this.priceForm.value, this.productId).subscribe(data => this.price = data);
    setTimeout(() => {
      console.log(this.price);
      this.router.navigate(['productInventory', this.productId])
    }, 5000);
  }

}
