import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';

export const CATEGORIES_ROUTES: Routes = [
  {
    path:'',redirectTo:'list',pathMatch:'full'
  },
  {
    path: 'list',
    component: CategoriesListComponent
  },
  {
    path: 'categories/:id',
    component: CategoriesEditComponent
  }
]
