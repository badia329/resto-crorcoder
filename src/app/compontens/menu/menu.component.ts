import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PlatComponent } from '../plat/plat.component';

@Component({
  selector: 'app-menu',
  imports: [NgFor, PlatComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  obj: any = [];
  menuTab = JSON.parse(localStorage.getItem('menus') || '[]');

  // المصفوفات حسب الفئة
  specialItems: any = [];
  breakfastItems: any = [];
  launchItems: any = [];
  dinnerItems: any = [];
  sneaksItems: any = [];

  constructor() {}

  ngOnInit() {
    console.log('here is menu', this.menuTab);
    for (let i = 0; i < this.menuTab.length; i++) {
      let item = this.menuTab[i];
      if (item.category === 'Special') {
        this.specialItems.push(item);
      } else if (item.category === 'Breakfast') {
        this.breakfastItems.push(item);
      } else if (item.category === 'Launch') {
        this.launchItems.push(item);
      } else if (item.category === 'Dinner') {
        this.dinnerItems.push(item);
      } else if (item.category === 'Sneaks') {
        this.sneaksItems.push(item);
      }
    }
  }
}
