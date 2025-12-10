import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generateId } from '../../shared/genericFunction';
import { CommonModule } from '@angular/common';
import { BannerNameComponent } from '../banner-name/banner-name.component';

@Component({
  selector: 'app-add-menu',
  imports: [FormsModule, CommonModule, BannerNameComponent],
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css',
})
export class AddMenuComponent {
  obj: any = {
    category: null,
  };
  addMenu(menuForm: any) {
    if (menuForm.valid) {
      const menuTab = JSON.parse(localStorage.getItem('menus') || '[]');
      this.obj.id = generateId(menuTab);
      menuTab.push(this.obj);
      localStorage.setItem('menus', JSON.stringify(menuTab));
      console.log('here is chefs obj', this.obj);
      menuForm.resetForm();
      this.obj = {};
    }
  }
}
