import { Component } from '@angular/core';
import { BannerNameComponent } from '../banner-name/banner-name.component';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from '../../service/chef.service';
import { ChefComponent } from '../chef/chef.component';

@Component({
  selector: 'app-chef-info',
  imports: [BannerNameComponent, ChefComponent],
  templateUrl: './chef-info.component.html',
  styleUrl: './chef-info.component.css',
})
export class ChefInfoComponent {
  foundChef: any = {};
  constructor(private activatedRoute: ActivatedRoute, private chefService: ChefService) {}
   ngOnInit() {
    let chefId = this.activatedRoute.snapshot.params['id'];
    this.chefService.getChefById(chefId).subscribe(
      (response) => {
        console.log("Here is object BE", response);
        this.foundChef = response.obj;
      }
    );
  }
}

