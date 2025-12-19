import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl:string = "http://localhost:3001/users"
  constructor(private httpClient: HttpClient) { }
  login(obj: any) {
    return this.httpClient.post(this.usersUrl + '/login', obj);
  }
  signup(obj: any) {
    return this.httpClient.post<{ msg: string; isAdded: boolean }>(
      this.usersUrl + '/signup', 
      obj
    );
  }
}
