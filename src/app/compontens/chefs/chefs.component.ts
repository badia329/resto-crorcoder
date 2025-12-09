import { Component } from '@angular/core';
import { ChefComponent } from "../chef/chef.component";
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { getFormlS } from '../../shared/genericFunction';

@Component({
  selector: 'app-chefs',
  imports: [ChefComponent, CommonModule],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
    chefsTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.chefsTab = getFormlS('chefs');
  }
  deletechef(chefId: any) {
    for (let i = 0; i < this.chefsTab.length; i++) {
      if (this.chefsTab[i].id === chefId) {
        this.chefsTab.splice(i, 1);
        break;
      }
    }
  }
  goToInfo(chefsId: any) {
    this.router.navigate(['chefsInfo/' + chefsId]);
  }
  goToEdit(chefsId: any) {
    this.router.navigate(['teamEdit/' + chefsId]);
  }
}
