import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public Product: Product = new Product;

  constructor(private _srvHttp: HttpClient) { }

  getProduct() {
    return this._srvHttp.get('https://fakestoreapi.com/products');
  }
}
