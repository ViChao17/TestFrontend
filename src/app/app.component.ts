import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TestFrontend';

  constructor() {
  }

  ngOnInit(): void {
    console.log('app init!');
  }

  on_active(): string {
    if(window.location.pathname === '/'){
      return ' active';
    }
    return '';
  }
}
