import { Routes } from '@angular/router';
import { HomeComponent } from './compontens/home/home.component';
import { AddChefComponent } from './compontens/add-chef/add-chef.component';
import { AddMenuComponent } from './compontens/add-menu/add-menu.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "addChef", component: AddChefComponent},
    {path: "addMenu", component: AddMenuComponent}
];
