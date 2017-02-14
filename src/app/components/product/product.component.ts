import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {

  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}
