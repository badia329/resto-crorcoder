import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getFormlS, setFormlS } from '../../shared/genericFunction';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chef-edit',
  imports: [FormsModule],
  templateUrl: './chef-edit.component.html',
  styleUrl: './chef-edit.component.css',
})
export class ChefEditComponent {
  obj: any = {};
  constructor(private activedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    let id = this.activedRoute.snapshot.params['id'];
    let chefs = getFormlS('chefsTab');
    for (let i = 0; i < chefs.length; i++) {
      if (chefs[i].id == id) {
        this.obj = chefs[i];
        break;
      }
    }
  }
  chefEdit() {
    console.log('here is new value', this.obj);
    let chefs = getFormlS('chefsTab');
    for (let i = 0; i < chefs.length; i++) {
      if (chefs[i].id == this.obj.id) {
        chefs[i] = this.obj;
        break;
      }
    }
    setFormlS('chefsTab', chefs);
    this.router.navigate(['admin']);
  }
}
