import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product/product';
import { Filter } from './filter/filter';
@Component({
  selector: 'product-list',
  imports: [CommonModule,Product,Filter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products=[
  {
  id: 3,
  name: "Adidas Ultraboost 22",
  description: "High-performance running shoes with responsive cushioning and breathable knit upper.",
  brand: "ADIDAS",
  gender: "MEN",
  category: "RUNNING",
  size: [6, 7, 8, 9, 10],
  color: ["Black", "White", "Gray"],
  price: 180,
  discountPrice: 150, 
  is_in_inventory: false,
  items_left: 5,
  imageURL: "https://th.bing.com/th/id/OIP.U_QfXuaYaEfDdy3KGga9RAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "adidas-ultraboost-22"
  },
  {
  id: 4,
  name: "Puma RS-X Sneakers",
  description: "Stylish sneakers with bold design and comfortable cushioning for everyday wear.",
  brand: "PUMA",
  gender: "MEN",
  category: "CASUAL",
  size: [6, 7, 8, 9, 10],
  color: ["Red", "Black", "White"],
  price: 140,
  is_in_inventory: true,
  items_left: 7,
  imageURL: "https://th.bing.com/th/id/OIP.jJicdm8c3ofNLm7irO7SnAHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "puma-rsx-sneakers"
  },
  {
  id: 5,
  name: "Nike Air Max 270",
  description: "Modern lifestyle shoes with large Air unit for maximum comfort and style.",
  brand: "NIKE",
  gender: "MEN",
  category: "CASUAL",
  size: [6, 7, 8, 9, 10],
  color: ["Black", "Blue", "White"],
  price: 160,
  discountPrice: 140, 
  is_in_inventory: true,
  items_left: 4,
  imageURL: "https://th.bing.com/th/id/OIP.tIb-jsHLhiquHb58fhsAsQHaJQ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "nike-air-max-270"
  },
  {
  id: 6,
  name: "Reebok Nano X2",
  description: "Training shoes designed for stability, strength workouts, and cross-training.",
  brand: "REEBOK",
  gender: "MEN",
  category: "TRAINING",
  size: [6, 7, 8, 9, 10],
  color: ["Black", "Green", "White"],
  price: 130,
  discountPrice: 100, 
  is_in_inventory: true,
  items_left: 6,
  imageURL: "https://th.bing.com/th/id/OIP.8OTFz21ftxHohuDweL1jKgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "reebok-nano-x2"
  },
  {
  id: 7,
  name: "Under Armour HOVR Phantom",
  description: "Running shoes with energy return cushioning and sleek modern design.",
  brand: "UNDER ARMOUR",
  gender: "MEN",
  category: "RUNNING",
  size: [6, 7, 8, 9, 10],
  color: ["Gray", "Black"],
  price: 150,
  is_in_inventory: false,
  items_left: 8,
  imageURL: "https://th.bing.com/th/id/OIP.WIyRv7oe0yuLCuQdx_t8TQHaEl?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "ua-hovr-phantom"
  },
  {
  id: 8,
  name: "New Balance 574 Classic",
  description: "Timeless design with durable construction and all-day comfort.",
  brand: "NEW BALANCE",
  gender: "MEN",
  category: "CASUAL",
  size: [6, 7, 8, 9, 10],
  color: ["Navy", "Gray", "Black"],
  price: 120,
  discountPrice: 90, 
  is_in_inventory: true,
  items_left: 10,
  imageURL: "https://th.bing.com/th/id/OIP.GU6nSFIt1WPEro-Fi-ZFaAHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  slug: "new-balance-574-classic"
  }
  ]
  selectedRadio:string="all";
  onFilterChange(value:string){
    console.log("Filter changed");
    this.selectedRadio=value;
    console.log(value);
  }
  @Input()
  searchText:string=''
  
  totalproducts=this.products.length;
  totalproductsInStock=this.products.filter(p=>p.is_in_inventory===true).length;
  totalproductsOutOfStock=this.products.filter(p=>p.is_in_inventory===false).length;
}