import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navToggler') navToggler!: ElementRef
  constructor(router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.navToggler.nativeElement.click();
      }
    })
   }

  ngOnInit(): void {
  }

}
