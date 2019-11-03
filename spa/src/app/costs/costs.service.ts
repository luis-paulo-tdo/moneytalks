import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  constructor(private http: HttpClient) { }

  getHome(): Observable<string> {
    return this.http.get<string>(`${API_URL}/`);
  }

  getCosts(): Observable<string> {
    return this.http.get<string>(`${API_URL}/costs`);
  }
}
