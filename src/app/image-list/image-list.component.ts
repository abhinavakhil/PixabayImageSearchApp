import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../shared/image-service.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
 searchQuery;
 Images:any[]=[];
 ImageFound:boolean=false;
 searching:boolean=false;
constructor(private imageService:ImageServiceService) { }

  ngOnInit() {
  }
  requestSuccess(response){
   this.Images=response.hits;
   console.log(response.hits);
   this.ImageFound=true;
  }
  requestError(error){
  console.log(error);
  }

  searchImages(query:string){
    this.searching=true;
  return this.imageService.getImage(query).
  subscribe(
    (response)=>this.requestSuccess(response),
    (error)=>this.requestError(error),
    ()=>this.searching=false//when any function runs here then it will be true
  )
  }

}
