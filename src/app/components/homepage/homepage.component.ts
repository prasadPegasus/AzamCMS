import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
  }
  submit() {
console.log("as");
this.router.navigate(['movies'], { relativeTo: this.activatedRoute });
  }
}
