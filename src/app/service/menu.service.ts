import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuUrl = 'http://localhost:3001/menu';
  constructor(private httpClient: HttpClient) {}

  getAllMenus() {
    return this.httpClient.get<{ tab: any; nbr: number }>(this.menuUrl);
  }
  getMeunById(id: number) {
    return this.httpClient.get<{ msg: string; obj: any }>(
      (this.menuUrl + '/' + id)
    );
  }
  addMenu(obj: any) {
    return this.httpClient.post<{ msg: String }>(this.menuUrl, obj);
  }
  deleteMenu(id: string) {
    return this.httpClient.delete<{ msg: string; isDeleted: boolean }>(
      this.menuUrl + '/' + id
    );
  }
  editMenu(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.menuUrl, newObj);
  }
}
