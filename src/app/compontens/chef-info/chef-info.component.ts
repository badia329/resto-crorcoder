import { Component } from '@angular/core';
import { BannerNameComponent } from '../banner-name/banner-name.component';
import { ActivatedRoute } from '@angular/router';
import { ChefComponent } from '../chef/chef.component';

@Component({
  selector: 'app-chef-info',
  imports: [BannerNameComponent, ChefComponent],
  templateUrl: './chef-info.component.html',
  styleUrl: './chef-info.component.css',
})
export class ChefInfoComponent {
  chefData: any = [];
  foundChef: any = {};
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.chefData = JSON.parse(localStorage.getItem('chefs') || '[]');
    for (let i = 0; i < this.chefData.length; i++) {
      if (this.chefData[i].id == id) {
      this.foundChef = this.chefData[i];
      break;
      }
    }
  }
}
