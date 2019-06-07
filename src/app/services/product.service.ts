import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class productService {
    banner =[ 
        { img: "https://cdn.pixabay.com/photo/2015/12/15/09/04/banner-1093909__340.jpg" },
         ]
    products =[ 
        { img: "https://colorway.foundry.com/site/assets/files/1031/slide1-img.png" },
        { img: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y9-2019/img/huawei-y9-2019-kv-product.png" },
        { img: "http://www.plantronics.com/content/dam/plantronics/images/catalog-content/voyager-3200-/voyager-3200-black-with-case-product-page.png" },
    ]
    
    constructor() { }

    getBanner() {
        return of(this.banner)

    }
    getProducts() {
        return of(this.products)

    }


}