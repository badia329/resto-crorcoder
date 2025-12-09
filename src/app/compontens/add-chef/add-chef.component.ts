import { Component } from '@angular/core';
import { generateId} from '../../shared/genericFunction';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-chef',
  imports: [FormsModule, NgIf],
  templateUrl: './add-chef.component.html',
  styleUrl: './add-chef.component.css',
})
export class AddChefComponent {
  obj: any = {};
  addChef(menuForm: any) {
    if (menuForm.valid) {
      const chefsTab = JSON.parse(localStorage.getItem('chefs') || '[]');
      this.obj.id = generateId(chefsTab);
      chefsTab.push(this.obj);
      localStorage.setItem('chefs', JSON.stringify(chefsTab));
      console.log('here is chefs obj', this.obj);
      menuForm.resetForm();
      this.obj = {};
    }
  }
}
