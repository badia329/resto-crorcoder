import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from '../../service/chef.service';

@Component({
  selector: 'app-chefs-table',
  imports: [NgFor],
  templateUrl: './chefs-table.component.html',
  styleUrl: './chefs-table.component.css',
})
export class ChefsTableComponent {
  chefsTab: any = [];
  constructor(private router: Router, private chefService: ChefService) {}
  ngOnInit() {
    this.chefService.getAllChefs().subscribe((data) => {
      console.log('Here is data from BE', data);
      this.chefsTab = data.tab;
    });
  }
  deleteChef(matchId: string) {
    this.chefService.deleteChef(matchId).subscribe((response) => {
      console.log('Here is response after match delete', response);

      if (response.isDeleted) {
        this.chefService.getAllChefs().subscribe((data) => {
          this.chefsTab = data.tab;
        });
      }
    });
  }
  goToInfo(chefId: string) {
    console.log('Chef ID before navigate:', chefId); 
    this.router.navigate(['chefInfo/' + chefId]);
  }
  goToEdit(chefsId: string) {
    this.router.navigate(['chefEdit/' + chefsId]);
  }
}
