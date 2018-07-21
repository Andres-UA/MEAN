import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champion } from '../models/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  selectedChampion: Champion;
  champions: Champion[];
  readonly URL_API = 'http://localhost:3000/api/champions';

  constructor(private http: HttpClient) {
    this.selectedChampion = new Champion();
  }

  indexChampions() {
    return this.http.get(this.URL_API);
  }

  storeChampion(champion: Champion){
    return this.http.post(this.URL_API, champion);
  }

  updateChampion(champion: Champion){
    return this.http.put(this.URL_API+`/${champion._id}`, champion);
  }

  destroyChampion(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }

}
