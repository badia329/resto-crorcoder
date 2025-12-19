import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getFormlS, setFormlS } from '../../shared/genericFunction';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerNameComponent } from '../banner-name/banner-name.component';
import { ChefService } from '../../service/chef.service';

@Component({
  selector: 'app-chef-edit',
  imports: [FormsModule, CommonModule, BannerNameComponent],
  templateUrl: './chef-edit.component.html',
  styleUrl: './chef-edit.component.css',
})
export class ChefEditComponent {
  obj: any = {};
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private chefService: ChefService
  ) {}
  ngOnInit() {
    let id = this.activedRoute.snapshot.params['id'];
    this.chefService.getChefById(id).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.obj = data.obj;
    });
  }
  chefEdit() {
    console.log('here is new value', this.obj);
    this.chefService.editChef(this.obj).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.router.navigate(['admin']);
    });
  }
}
