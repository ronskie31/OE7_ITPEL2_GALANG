import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'Home' },
    { title: 'Songs', url: '/folder/Songs/songs', icon: 'play' },
    { title: 'Forums', url: '/folder/Forums/forums', icon: 'newspaper' },
    { title: 'About', url: './folder/about/about', icon: 'information' },
  ];
 
}
