import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PlatComponent } from "../plat/plat.component";

@Component({
  selector: 'app-menu',
  imports: [NgFor, PlatComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  plats: any = [{
    name: 'Special',
    items: [
      { name: 'Pork Sandwich', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_1.png' },
      { name: 'Roasted Marrow', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_2.png' },
      { name: 'Summer Cooking', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_3.png' },
      { name: 'Easter Delight', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_4.png' },
      { name: 'Tiener Schnitze', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_5.png' },
      { name: 'Chicken Roast', description: "They're wherein heaven seed hath nothing", price: 40, image: 'img/food_menu/single_food_6.png' }
    ]
  }
  ]
}
