import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-name',
  imports: [],
  templateUrl: './banner-name.component.html',
  styleUrl: './banner-name.component.css'
})
export class BannerNameComponent {
 @Input() title : string = "default Name"
}
