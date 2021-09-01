import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  pageHeader$ = new BehaviorSubject<any>(null)
  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }

  updatePageHeader(pageDetails: any) {
  return this.pageHeader$.next(pageDetails)
  }

  getPageHeader$() {
   return this.pageHeader$.asObservable();
   }
}
