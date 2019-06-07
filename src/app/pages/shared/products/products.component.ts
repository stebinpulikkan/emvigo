import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  proImgs;
  constructor(private produtserv:productService) { }

  ngOnInit() {
    this.getBannerList();
  }
  getBannerList() {
    this.produtserv.getProducts().subscribe(
      response => {
        this.proImgs = response;
     
      }
    );
  }

}
