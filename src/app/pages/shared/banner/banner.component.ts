import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.service';
declare var script;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banerImgs = null;
  constructor(private bannerserv: productService) { }

  ngOnInit() {
    this.getBannerList();
  }
  getBannerList() {
    this.bannerserv.getBanner().subscribe(
      response => {
        this.banerImgs = response;
     
      }
    );
  }
}
