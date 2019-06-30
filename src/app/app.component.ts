import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brand-analytics';
  clickedSideNavButton:string = '';

  clickedNav(navigationLocation:string){
    this.clickedSideNavButton = navigationLocation;
  }
}
