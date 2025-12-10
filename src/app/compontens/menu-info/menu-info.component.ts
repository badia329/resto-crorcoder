import { Component } from '@angular/core';
import { BannerNameComponent } from '../banner-name/banner-name.component';
import { PlatComponent } from '../plat/plat.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-info',
  imports: [BannerNameComponent, PlatComponent],
  templateUrl: './menu-info.component.html',
  styleUrl: './menu-info.component.css',
})
export class MenuInfoComponent {
  platsObj: any = [];
  plat: any = {};
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.platsObj = JSON.parse(localStorage.getItem('menus') || '[]');
    for (let i = 0; i < this.platsObj.length; i++) {
      if (this.platsObj[i].id == id) {
        this.plat = this.platsObj[i];
      }
    }
  }
}
