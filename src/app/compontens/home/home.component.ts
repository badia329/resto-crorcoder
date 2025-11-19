import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { ItemsComponent } from '../items/items.component';
import { MenuComponent } from '../menu/menu.component';
import { NewsComponent } from '../news/news.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-home',
  imports: [IntroComponent,ItemsComponent,MenuComponent,NewsComponent,ReservationComponent,ReviewsComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
