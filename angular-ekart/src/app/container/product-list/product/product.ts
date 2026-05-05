import { Component,Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Productss } from '../../../Models/Productss';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  addToCart(event:any){
    console.log("Product added to cart:",event);
  }
  @Input() 
  product: Productss;
}
