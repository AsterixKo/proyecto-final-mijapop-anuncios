import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavBarService {

  // Observable string sources
  private navBarChangedSource = new Subject<string>();


  //Observable string streams
  navBarChanged$ = this.navBarChangedSource.asObservable();

  constructor() { }

  //Service message commands

  changeNavBar(state: string) {
    this.navBarChangedSource.next(state);
  }
}
