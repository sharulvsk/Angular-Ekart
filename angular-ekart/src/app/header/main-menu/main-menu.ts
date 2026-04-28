import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'main-menu',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {
  listOfMenuItems: string[]=['Home', 'Products', 'About', 'Contact']
}
