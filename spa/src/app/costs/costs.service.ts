import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

export class PageTemplate {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  constructor(private http: HttpClient) { }

  getHome(): Observable<PageTemplate> {
    return this.http.get<PageTemplate>(`${API_URL}/`);
  }

  getCosts(): Observable<PageTemplate> {
    return this.http.get<PageTemplate>(`${API_URL}/costs`);
  }
}
