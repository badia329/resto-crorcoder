import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getFormlS } from '../../shared/genericFunction';

@Component({
  selector: 'app-chefs-table',
  imports: [NgFor],
  templateUrl: './chefs-table.component.html',
  styleUrl: './chefs-table.component.css'
})
export class ChefsTableComponent {
 chefsTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.chefsTab = getFormlS('chefsTab');
  }
  deleteChef(chefsId: any) {
    for (let i = 0; i < this.chefsTab.length; i++) {
      if (this.chefsTab[i].id === chefsId) {
        this.chefsTab.splice(i, 1);
        break;
      }
    }
  }
  goToInfo(chefsId: any) {
    this.router.navigate(['chefInfo/' + chefsId]);
  }
  goToEdit(chefsId: any) {
    this.router.navigate(['chefEdit/' + chefsId]);
  }

}
