import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private decodedData: any;

  storeDecodedData(decodedToken: any) {
    this.decodedData = decodedToken;
    
  }

  getDecodedData(): any {
    return this.decodedData;
  }
}
