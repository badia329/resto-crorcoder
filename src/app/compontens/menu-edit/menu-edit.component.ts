import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getFormlS, setFormlS } from '../../shared/genericFunction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-edit',
  imports: [FormsModule],
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})
export class MenuEditComponent {
  obj: any = {};
  constructor(private activedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    let id = this.activedRoute.snapshot.params['id'];
    let menuTab = getFormlS('menuTab');
    for (let i = 0; i < menuTab.length; i++) {
      if (menuTab[i].id == id) {
        this.obj = menuTab[i];
        break;
      }
    }
  }
  chefEdit() {
    console.log('here is new value', this.obj);
    let menuTab = getFormlS('menuTab');
    for (let i = 0; i < menuTab.length; i++) {
      if (menuTab[i].id == this.obj.id) {
        menuTab[i] = this.obj;
        break;
      }
    }
    setFormlS('menuTab', menuTab);
    this.router.navigate(['admin']);
  }
}
