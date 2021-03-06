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

  getCountry(rule: any, filters: any,
    callback: (items: any) => void,
    errorHandler: (errorMessage: any) => void = this.defaultErrorHandler
  ): void {
    const rule_enc = encodeURI(JSON.stringify(rule));
    const filters_enc = encodeURI(JSON.stringify(filters));
    this.handleRoute('GET', `/country/?rule=${rule_enc}&filters=${filters_enc}`, callback, errorHandler);
  }

  getIntOrg(rule: any, filters: any,
             callback: (items: any) => void,
             errorHandler: (errorMessage: any) => void = this.defaultErrorHandler
  ): void {
    const rule_enc = encodeURI(JSON.stringify(rule));
    const filters_enc = encodeURI(JSON.stringify(filters));
    this.handleRoute('GET', `/int_org/?rule=${rule_enc}&filters=${filters_enc}`, callback, errorHandler);
  }

  getRegions(rule: any, filters: any,
             callback: (items: any) => void,
             errorHandler: (errorMessage: any) => void = this.defaultErrorHandler
  ): void {
    const rule_enc = encodeURI(JSON.stringify(rule));
    const filters_enc = encodeURIComponent(JSON.stringify(filters));
    this.handleRoute('GET', `/region/?rule=${rule_enc}&filters=${filters_enc}`, callback, errorHandler);
  }

  getSubregions(rule: any, filters: any,
             callback: (items: any) => void,
             errorHandler: (errorMessage: any) => void = this.defaultErrorHandler
  ): void {
    const rule_enc = encodeURI(JSON.stringify(rule));
    const filters_enc = encodeURI(JSON.stringify(filters));
    this.handleRoute('GET', `/subregion/?rule=${rule_enc}&filters=${filters_enc}`, callback, errorHandler);
  }

  getCountryList(callback: (items: any) => void, errorHandler: (errorMessage: any) => void = this.defaultErrorHandler): void {
    this.handleRoute('GET', `/all_country/`, callback, errorHandler);
  }

  getRegionList(callback: (items: any) => void, errorHandler: (errorMessage: any) => void = this.defaultErrorHandler): void {
    this.handleRoute('GET', `/all_region/`, callback, errorHandler);
  }

  getSubregionList(callback: (items: any) => void, errorHandler: (errorMessage: any) => void = this.defaultErrorHandler): void {
    this.handleRoute('GET', `/all_subregion/`, callback, errorHandler);
  }

  getVariableList(callback: (items: any) => void, errorHandler: (errorMessage: any) => void = this.defaultErrorHandler): void {
    this.handleRoute('GET', `/variables/`, callback, errorHandler);
  }
}
