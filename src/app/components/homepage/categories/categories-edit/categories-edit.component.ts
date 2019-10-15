import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../../services/categories.service';
import { Categories } from '../../../../models/categories';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'categories-edit',
  templateUrl: './categories-edit.component.html'
})
export class CategoriesEditComponent implements OnInit {

    id: string;
    categories: Categories;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private categoriesService: CategoriesService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Categories());
                    return this.categoriesService.findById(id)
                })
            )
            .subscribe(
                categories => { 
                    this.categories = categories; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.categoriesService.save(this.categories).subscribe(
            categories => { 
                this.categories = categories; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}