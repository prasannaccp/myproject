// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-item',
//   templateUrl: './product-item.component.html',
//   styleUrls: ['./product-item.component.css']
// })
// export class ProductItemComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component} from '@angular/core';
// import { Injectable }     from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// @Component ({
//    selector: 'app-product-item',
//    template: '<h1>{{appTitle}}</h1>',
// })

// export class ProductItemComponent implements OnInit {
//    appTitle: string = 'Welcome';
//    constructor(private http: Http) {
//     var obj;
//     this.getJSON().subscribe(data => obj=data);
// }

import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
     selector: 'app-product-item',
     templateUrl: './product-item.component.html',
     styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  url =`https://api.myjson.com/bins/qhnfp`;

  items:any;

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      this.items = data;
    })
  }

  addToCart(product:any) {
    alert("adding to cart");
    console.log(this.items.name);
    //this._shoppingCartService.add(this.product)

  }
}