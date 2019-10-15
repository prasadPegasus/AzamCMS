import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesService } from '../../../services/categories.service';
import { CATEGORIES_ROUTES } from './categories.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CATEGORIES_ROUTES)
  ],
  declarations: [
    CategoriesListComponent,
    CategoriesEditComponent
  ],
  providers: [
    CategoriesService
  ],
  exports: [
  ]
})
export class CategoriesModule { }
