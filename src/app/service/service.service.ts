import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Backend address ( addresse de destination du backend)
  chefshURL: string = 'https://localhost:9000';
  //httpClient : bostagi
  constructor(private httpClient: HttpClient) {}
  // req 1 : Get all Matches
  // Response: array of Matches
  getAllChefs() {
    return this.httpClient.get(this.chefshURL);
  }
  getChefById(id: number) {
    //
    return this.httpClient.get(this.chefshURL + '/' + id);
  }
  //req 3: Delete Match
  //Response : true/false || "Deleted/not deleted"
  deletechef(id: number) {
    return this.httpClient.delete(this.chefshURL + '/' + id);
  }
  // Req 4 : Add Match
  // Reponse :
  addChef(obj: any) {
    return this.httpClient.post(this.chefshURL, obj);
  }
  // req 5 : Edit Match
  // Respone : true/flase
  editChef(newObj: any) {
    return this.httpClient.put(this.chefshURL, newObj);
  } 
}
