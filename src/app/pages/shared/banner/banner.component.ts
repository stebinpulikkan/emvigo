import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.service';
declare var $;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banerImgs = null;
  currentImg = 1
  constructor(private bannerserv: productService) { }

  ngOnInit() {
    let that = this;
    this.getBannerList();
    setTimeout(function () {
      that.checkImg();
    }, 500)
  }
  getBannerList() {
    this.bannerserv.getBanner().subscribe(
      response => {
        this.banerImgs = response;
       }
    );
  }
  leftClick() {
    $(".img-container").animate({ left: '+=1000px' });
    // $("#bac").animate({right: '+=300px'});
    this.currentImg--;
    this.checkImg();
  }
  rightClick() {
    $(".img-container").animate({ left: '-=1000px' });
    // $("#bac").animate({ right: '-=300px' });
    this.currentImg++;
    this.checkImg();
  }
  checkImg() {
    if (this.currentImg == 1) {
      $("#bu1").fadeOut();
    }
    else {
      $("#bu1").fadeIn();
    }

    if (this.currentImg == 3) {
      $("#bu2").fadeOut();
    } else {
      $("#bu2").fadeIn();
    }
  }
}
