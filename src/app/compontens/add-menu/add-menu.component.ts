import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BannerNameComponent } from '../banner-name/banner-name.component';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-add-menu',
  imports: [FormsModule, CommonModule, BannerNameComponent],
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css',
})
export class AddMenuComponent {
  obj: any = {};
  constructor(private menuService: MenuService) {}
  addMenu() {
    console.log('here is chefs Menu', this.obj);
    this.menuService.addMenu(this.obj).subscribe((data) => {
      console.log('Here is response from Be after adding match', data);
    });
  }
}
