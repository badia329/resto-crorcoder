import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-table',
  imports: [NgFor],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.css',
})
export class MenuTableComponent {
  menuTab: any = [];
  constructor(private router: Router, private menuService: MenuService) {}
  ngOnInit() {
    this.menuService.getAllMenus().subscribe(
      (data) => {
        console.log("Here is data from BE", data);
        this.menuTab = data.tab;
      }
    );
  }
  deleteMenu(menuId: string) {
   this.menuService.deleteMenu(menuId).subscribe((response) => {
      console.log('Here is response after match delete', response);

      if (response.isDeleted) {
        this.menuService.getAllMenus().subscribe((data) => {
          this.menuTab = data.tab;
        });
      }
    });
  }
  goToInfo(menuId: string) {
    this.router.navigate(['menuInfo/' + menuId]);
  }
  goToEdit(menuId: string) {
    this.router.navigate(['menuEdit/' + menuId]);
  }
}
