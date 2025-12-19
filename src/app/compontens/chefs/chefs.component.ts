import { Component } from '@angular/core';
import { ChefComponent } from "../chef/chef.component";
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { ChefService } from '../../service/chef.service';

@Component({
  selector: 'app-chefs',
  imports: [ChefComponent, CommonModule],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
    chefsTab: any = [];
  constructor(private router: Router, private chefService: ChefService) {}
  ngOnInit() {
    this.chefService.getAllChefs().subscribe((data) => {
      console.log('Here is data from BE', data);
      this.chefsTab = data.tab
    })
  }
  deleteChef(chefId: string) {
    this.chefService.deleteChef(chefId).subscribe((response) => {
      console.log('Here is response after Chef delete', response);
      if (response.isDeleted) {
        this.chefService.getAllChefs().subscribe((data) => {
          this.chefsTab = data.tab;
        });
      }
    });
  }
  goToInfo(chefsId: any) {
    this.router.navigate(['chefsInfo/' + chefsId]);
  }
  goToEdit(chefsId: any) {
    this.router.navigate(['teamEdit/' + chefsId]);
  }
}
