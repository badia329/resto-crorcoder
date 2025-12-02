import { Component } from '@angular/core';
import { generateId, getFormlS, setFormlS } from '../../shared/genericFunction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-chef',
  imports: [FormsModule],
  templateUrl: './add-chef.component.html',
  styleUrl: './add-chef.component.css',
})
export class AddChefComponent {
  obj: any = {};
  addChef() {
    const T = getFormlS('chefsTab');
    this.obj.id = generateId(T);
    T.push(this.obj);
    setFormlS('chefsTab', T);
    console.log('here is chefs obj', this.obj);
  }
}