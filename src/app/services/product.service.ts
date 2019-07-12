import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class productService {
    banner =[ 
        { img: "https://consulting.kantar.com/wp-content/uploads/2019/03/Superwomen-center-banner.jpg" },
        { img: "https://consulting.kantar.com/wp-content/uploads/2018/05/growth-strategy_header-2000x400.jpg" },
        { img: "https://images.reverb.com/image/upload/s--_ig3OdUR--/a_exif,c_fill,fl_progressive,g_north,h_400,q_auto:eco,w_2000/v1495810578/ildhocab0igw4ygpg7zp.jpg" }
         ]
    products =[ 
        { img: "https://colorway.foundry.com/site/assets/files/1031/slide1-img.png" ,name:"FZ125"},
        { img: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y9-2019/img/huawei-y9-2019-kv-product.png",name:"Cover135" },
        { img: "http://www.plantronics.com/content/dam/plantronics/images/catalog-content/voyager-3200-/voyager-3200-black-with-case-product-page.png",name:"Case-care" },
    ]
    
    constructor() { }

    getBanner() {
        return of(this.banner)

    }
    getProducts() {
        return of(this.products)

    }


}