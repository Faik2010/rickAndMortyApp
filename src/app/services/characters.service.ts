import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { responseModel } from '../models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getAll(page:number):Observable<responseModel>{
    let api= this.apiUrl + "character/?page=" + page
    return this.httpClient.get<responseModel>(api)
  }
}
