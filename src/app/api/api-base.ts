import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiBase {

  private baseUrl = environment.API_URL;

  protected httpClient!: HttpClient;

  handleRoute(method: string, url: string, callback: (data: any) => void, errorHandler: (errorMessage: any) => void, payload?: any): void {
    try {
      const options: any = {};
      if (payload) {
        options.body = payload;
      }
      this.httpClient.request(method, this.baseUrl + url, options).toPromise()
        .then(response => {
          callback(response);
        });
    } catch (err) {
      errorHandler(err);
    }
  }

  defaultErrorHandler(errorMessage: any): any {
  }
}
