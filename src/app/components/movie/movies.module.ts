import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesService } from '../../services/movies.service';
import { MOVIES_ROUTES } from './movies.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MOVIES_ROUTES)
  ],
  declarations: [
    MoviesListComponent,
    MoviesEditComponent
  ],
  providers: [
    MoviesService
  ],
  exports: [
  ]
})
export class MoviesModule { }
