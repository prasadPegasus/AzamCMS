import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { Movies } from '../../../models/movies';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'movies-edit',  
  templateUrl: './movies-edit.component.html'
})
export class MoviesEditComponent implements OnInit {

    id: string;
    movies: Movies;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Movies());
                    return this.moviesService.findById(id)
                })
            )
            .subscribe(
                movies => { 
                    this.movies = movies; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.moviesService.save(this.movies).subscribe(
            movies => { 
                this.movies = movies; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}