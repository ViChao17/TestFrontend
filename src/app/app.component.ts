import { Component, OnInit } from '@angular/core';
import {ApiClientService} from "./api/api-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TestFrontend';

  constructor(protected api: ApiClientService) {
  }

  ngOnInit(): void {
    this.api.getRoot(items => {
      console.log(items);
    });
  }
}
