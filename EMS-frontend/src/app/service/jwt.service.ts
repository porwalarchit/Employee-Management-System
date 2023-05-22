import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private decodedData: any;

  storeDecodedData(decodedToken: any) {
    this.decodedData = decodedToken;
    // console.log(this.decodedData);
    
  }

  getDecodedData(): any {
    // console.log(this.decodedData);
    return this.decodedData;
  }
}
