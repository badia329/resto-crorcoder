import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getFormlS } from '../../shared/genericFunction';

@Component({
  selector: 'app-menu-table',
  imports: [NgFor],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.css',
})
export class MenuTableComponent {
  menuTab: any = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.menuTab = getFormlS('menuTab');
  }
  deleteMatch(menuId: any) {
    for (let i = 0; i < this.menuTab.length; i++) {
      if (this.menuTab[i].id == menuId) {
        this.menuTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('menuTab', JSON.stringify(this.menuTab));
  }
  goToInfo(menuId: any) {
    this.router.navigate(['menuInfo/' + menuId]);
  }
  goToEdit(menuId: any) {
    this.router.navigate(['menuEdit/' + menuId]);
  }
}
