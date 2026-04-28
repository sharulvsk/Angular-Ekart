import { Component } from '@angular/core';
import { Search } from './search/search';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
@Component({
  selector: 'app-container',
  standalone:true,
  imports: [Search, CommonModule, ProductList],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  //name="Jonh";
  addToCart:number=0;
  product={
    name:'Iphone',
    price:999,
    color:'Black',
    discount:8.5,
    inStock:10,
    pImage:"iphone.png"
  }
  getDiscount(){
    return this.product.price-(this.product.price*this.product.discount/100);
  }
  searchText:string='';
  onNameChange(value: any){
    this.searchText=value;
  }
  decreaseOnClick(){
    if(this.addToCart>0){
      this.addToCart--;
    }
  }
  increaseOnClick(){
    if(this.addToCart<this.product.inStock){
      this.addToCart++;
    }
    if(this.addToCart>=this.product.inStock){
      alert('No more items in stock');
    }
  }
  listOfItems:string[]=['Iphone','Samsung','OnePlus','Redmi'];
}
