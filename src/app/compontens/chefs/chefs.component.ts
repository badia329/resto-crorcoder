import { Component } from '@angular/core';
import { ChefComponent } from "../chef/chef.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chefs',
  imports: [ChefComponent, NgFor],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
  chefsTab: any = [
    { name: "Lara Bennett", experience: "Pastry Chef", speciality: "Cakes & Desserts", image: "img/team/chefs_2.png" },
    { name: "Marco Rossi", experience: "Sous Chef", speciality: "Italian Cuisine", image: "img/team/chefs_3.png" },
    { name: "Sofia Kim", experience: "Head Chef", speciality: "Asian Fusion", image: "img/team/chefs_1.png" },
  ]
}
