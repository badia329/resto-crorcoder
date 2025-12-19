import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChefService {
  chefsUrl = 'http://localhost:3001/chefs';
  constructor(private httpClient: HttpClient) {}

  getAllChefs() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.chefsUrl);
  }
  getChefById(id: string) {
    return this.httpClient.get<{ msg: string; obj: any }>(
      this.chefsUrl + '/' + id
    );
  }
  addChef(obj: any) {
    return this.httpClient.post<{ msg: string; obj: any }>(this.chefsUrl, obj);
  }
  deleteChef(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.chefsUrl + '/' + id
    );
  }
  editChef(newObj: any) {
    return this.httpClient.put(this.chefsUrl, newObj);
  }
}
