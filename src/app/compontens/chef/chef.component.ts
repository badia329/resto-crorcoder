import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chef',
  imports: [CommonModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.css',
})
export class ChefComponent {
  @Input() chefData: any = {};

  getColor(subject: number): string {
    return subject > 12 ? 'blue'
    : subject > 8 ? 'orange'
    : subject > 5 ? 'red'
    : 'black'
  }
  getFontSize(subject: number): string {
    return subject > 12 ? '20px'
    : subject > 8 ? 'orange'
    : subject > 5 ? 'red'
    : '14px'
  }
  
}
