import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchCocktails(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search.php?s=${query}`);
  }

  getCocktailDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getDefaultCocktailList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search.php?f=a`);
  }
}
