import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MoviesFilter } from '../movies-filter';
import { MoviesService } from '../../../services/movies.service';
import { Movies } from '../../../models/movies';

@Component({
    selector: 'movies',
    templateUrl: 'movies-list.component.html'
})
export class MoviesListComponent {

    filter = new MoviesFilter();
    selectedMovies: Movies;

    get moviesList(): Movies[] {
        return this.moviesService.moviesList;
    }

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.moviesService.load(this.filter);
    }

    select(selected: Movies): void {
        this.selectedMovies = selected;
    }

}
