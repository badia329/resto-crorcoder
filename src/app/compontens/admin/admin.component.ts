import { Component } from '@angular/core';
import { MenuTableComponent } from "../menu-table/menu-table.component";
import { ChefsTableComponent } from '../chefs-table/chefs-table.component';

@Component({
  selector: 'app-admin',
  imports: [MenuTableComponent,ChefsTableComponent,MenuTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
