import {Component, OnInit} from '@angular/core';
import {ApiClientService} from "./api/api-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TestFrontend';

  constructor(private api: ApiClientService) {
  }

  ngOnInit(): void {
    console.log('ok!');
    this.api.getRoot(items => {
      console.log(items);
    });
  }
}
