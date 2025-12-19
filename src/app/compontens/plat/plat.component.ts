import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plat',
  imports: [CommonModule],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.css',
})
export class PlatComponent {
  @Input() platData: any = {};
  
}
