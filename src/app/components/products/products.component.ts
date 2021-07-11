import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/products/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<any> | undefined;
  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
  }


}
