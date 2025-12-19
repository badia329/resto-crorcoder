import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ChefService } from '../../service/chef.service';

@Component({
  selector: 'app-add-chef',
  imports: [FormsModule, NgIf],
  templateUrl: './add-chef.component.html',
  styleUrl: './add-chef.component.css',
})
export class AddChefComponent {
  obj: any = {};
  constructor(private chefService: ChefService) {}
  addChef() {
    console.log('here is chefs obj', this.obj);
    this.chefService.addChef(this.obj).subscribe((data) => {
      console.log('Here is response from Be after adding match', data);
    });
  }
}
