import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Inventory } from '../classes/inventory';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductBackendServiceService } from '../services/product-backend-service.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.css']
})
export class ProductInventoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductBackendServiceService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  inventoryForm: FormGroup;
  productId:number;
  ngOnInit() {
    this.setup();
    this.getAllrouteVariables();
  }
  getAllrouteVariables() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    
  }
  setup() {
    this.inventoryForm=this.fb.group({
      stockNumber:['']
    })
  }
  inventory:Inventory;
  onSubmit() {
    this.spinnerService.show();
    console.log(this.inventoryForm.value as Inventory);
    this.service.updateInventory(this.inventoryForm.value,this.productId).subscribe(data=>this.inventory=data);
    setTimeout(() => {
      console.log(this.inventory);
      this.router.navigate(['productPromotion',this.productId])
    }, 5000);
  }

}
