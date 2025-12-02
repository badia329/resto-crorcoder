import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generateId, getFormlS, setFormlS } from '../../shared/genericFunction';

@Component({
  selector: 'app-add-menu',
  imports: [FormsModule],
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css',
})
export class AddMenuComponent {
  obj: any = {};
  addMenu() {
    const T = getFormlS('menuTab');
    this.obj.id = generateId(T);
    T.push(this.obj);
    setFormlS('menuTab', T);
    console.log('here is chefs obj', this.obj);
  }
}
