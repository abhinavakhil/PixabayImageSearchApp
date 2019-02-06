import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private query:string;
  private api_key:string=environment.apikey;
  private api_url:string=environment.apiUrl;
  private Url:string=this.api_url+this.api_key+'&q=';
  private perpage:string="&per_page=9";
  constructor(private http:HttpClient) { }

  getImage(query:string){
  return this.http.get(this.Url+query+this.perpage);
  
  
  // .pipe(map(res:Response)=>res.json());
  }
}
