import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chefs-table',
  imports: [NgFor],
  templateUrl: './chefs-table.component.html',
  styleUrl: './chefs-table.component.css'
})
export class ChefsTableComponent {
chefsTab = [
  { id: 1, name: 'Chef Marco', experience: '12 years', speciality: 'Italian Cuisine' },
  { id: 2, name: 'Chef Lina', experience: '8 years', speciality: 'Pastry & Desserts' },
  { id: 3, name: 'Chef Omar', experience: '15 years', speciality: 'Mediterranean Dishes' }
];

}
