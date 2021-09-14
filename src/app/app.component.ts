import { Component, OnInit } from '@angular/core';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd, Data } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { MetaService } from './core/meta.service';
// declare const bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Money Marque';

  constructor(private metaService: MetaService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          window.scrollTo(0, 0)
          return this.activatedRoute
        }),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({ title, description }: Data) => {

          this.metaService.updateTitle(title);
          this.metaService.updateDescription(description);
        })
      ).subscribe();
  }
}
