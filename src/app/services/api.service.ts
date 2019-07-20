import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.apiURL}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiURL}${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  delete(path, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${environment.apiURL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
