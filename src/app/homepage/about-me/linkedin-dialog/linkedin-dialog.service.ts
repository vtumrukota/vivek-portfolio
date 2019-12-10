import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinkedInService {
  constructor(private http: HttpClient) {}

  getVivekProfile() {
    return this.http.get('https://api.linkedin.com/v1/people/url=https://www.linkedin.com/in/vtumrukota/');
  }
}
