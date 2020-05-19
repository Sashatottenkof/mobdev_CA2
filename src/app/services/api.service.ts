import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
 
  getCharacters() {
    return this.http.get('https://www.breakingbadapi.com/api/characters');
  }
 
  getCharacter(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  }
  getEpisodes() {
    return this.http.get('https://www.breakingbadapi.com/api/episodes');
  }
  getEpisode(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
  }
  getQuotes() {
    return this.http.get('https://www.breakingbadapi.com/api/quotes');
  }
  getQuote(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
  }
  getCount() {
    return this.http.get('https://www.breakingbadapi.com/api/deaths');
  }
  getCountChar(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/death-count/${id}`);
  }
}