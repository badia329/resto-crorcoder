import { Routes } from '@angular/router';
import { HomeComponent } from './compontens/home/home.component';
import { AddChefComponent } from './compontens/add-chef/add-chef.component';
import { AddMenuComponent } from './compontens/add-menu/add-menu.component';
import { AdminComponent } from './compontens/admin/admin.component';
import { ChefsComponent } from './compontens/chefs/chefs.component';
import { MenuComponent } from './compontens/menu/menu.component';
import { MenuInfoComponent } from './compontens/menu-info/menu-info.component';
import { MenuEditComponent } from './compontens/menu-edit/menu-edit.component';
import { ChefInfoComponent } from './compontens/chef-info/chef-info.component';
import { ChefEditComponent } from './compontens/chef-edit/chef-edit.component';
import { SigninComponent } from './compontens/signin/signin.component';
import { SignupComponent } from './compontens/signup/signup.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "addChef", component: AddChefComponent},
    {path: "addMenu", component: AddMenuComponent},
    {path: "admin", component: AdminComponent},
    {path: "chefs", component: ChefsComponent},
    {path: "menu", component: MenuComponent},
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},
    {path: "signupAdmin", component: SignupComponent},
    {path: "signupChef", component: SignupComponent},
    {path: "menuInfo/:id", component: MenuInfoComponent},
    {path: "menuEdit/:id", component: MenuEditComponent},
    {path: "chefInfo/:id", component: ChefInfoComponent},
    {path: "chefEdit/:id", component: ChefEditComponent},
];
