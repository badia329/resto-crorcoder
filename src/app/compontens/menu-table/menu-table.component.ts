import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-table',
  imports: [NgFor],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.css'
})
export class MenuTableComponent {
 menuItems = [
 { id: 1, name: 'Margherita Pizza', price: 25, description: 'Classic pizza with tomato sauce and mozzarella.' },
  { id: 2, name: 'Chicken Burger', price: 18, description: 'Grilled chicken, lettuce, tomato, and house sauce.' },
  { id: 3, name: 'Pasta Alfredo', price: 22, description: 'Creamy Alfredo sauce with parmesan and mushrooms.' },
  { id: 4, name: 'Caesar Salad', price: 14, description: 'Fresh lettuce, croutons, parmesan, and Caesar dressing.' },
  { id: 5, name: 'Tiramisu', price: 12, description: 'Italian dessert with coffee and mascarpone cream.' }
];


}
