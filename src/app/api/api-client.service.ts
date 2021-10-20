import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiBase} from "./api-base";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService extends ApiBase {

  constructor(protected httpClient: HttpClient) {
    super();
  }

  getRoot(
    callback: (items: any) => void,
    errorHandler: (errorMessage: any) => void = this.defaultErrorHandler
  ): void {
    this.handleRoute('GET', `/`, callback, errorHandler);
  }

}
