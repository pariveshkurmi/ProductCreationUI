import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { Product } from '../classes/product';
import { ProductBackendServiceService } from '../services/product-backend-service.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:ProductBackendServiceService,private router:Router, private spinnerService: Ng4LoadingSpinnerService) { }
  product:Product;
  productForm:FormGroup;
  ngOnInit() {
    this.setup();
  }
  setup()
  {
    this.productForm=this.fb.group({
      productName:[''],
      size:[''],
      color:[''],
      brand:[''],
      productCreationDate:[''],
      productUpdationDate:['']

    })
  }
  onSubmit()
  {
    this.spinnerService.show();
    console.log(this.productForm.value);
    this.service.saveProduct(this.productForm.value).subscribe(data=>this.product=data);
    setTimeout(() => {
      console.log(this.product);
      this.router.navigate(['productPrice',this.product.productId])
    }, 5000);
   
    
  }
}
