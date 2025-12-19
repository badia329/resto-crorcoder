import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getFormlS, setFormlS } from '../../shared/genericFunction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css',
})
export class MenuEditComponent {
  obj: any = {};
  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {}
  ngOnInit() {
    let id = this.activedRoute.snapshot.params['id'];
    this.menuService.getMeunById(id).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.obj = data.obj;
    });
  }
  menuEdit() {
    console.log('here is new value', this.obj);
    this.menuService.editMenu(this.obj).subscribe((data) => {
      console.log('Here is data from BE', data);
      this.router.navigate(['admin']);
    });
  }
}
