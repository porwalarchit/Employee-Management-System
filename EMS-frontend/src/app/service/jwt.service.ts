import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private decodedData: any;

  storeDecodedData(decodedToken: any) {
    console.log("Stored data: ", this.decodedData);
    this.decodedData = decodedToken;
    
  }

  getDecodedData(): any {
    console.log("Get data: ", this.decodedData);
    return this.decodedData;
  }
}
