import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements OnInit{
  private decodedData: any;

  ngOnInit(){
    this.storeDecodedData(this.decodedData);
  }

  storeDecodedData(decodedToken: any) {
    this.decodedData = decodedToken;
    
  }

  getDecodedData(): any {
    return this.decodedData;
  }
}
