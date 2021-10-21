import { Component, OnInit } from '@angular/core';
import {ApiClientService} from "../../api/api-client.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
    this.api.getRoot(items => {
      console.log(items);
    });
  }

}
