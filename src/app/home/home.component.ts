import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { responseModel } from '../models/responseModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responseModel:responseModel={
    "info": {
      count:0,
      next:"",
      pages:0,
      prev:""
    },
    "results": {
      created:"",
      episode:"",
      gender:"",
      id:0,
      image:"",
      location:"",
      name:"",
      origin:"",
      species:"",
      status:"",
      type:"",
      url:""
    },
    count: 0,
    next: '',
    pages: 0,
    prev: "",
    created: '',
    episode: undefined,
    gender: '',
    id: 0,
    image: '',
    location: undefined,
    name: '',
    origin: undefined,
    species: '',
    status: '',
    type: '',
    url: ''
  }
page=3
currentPage=4
pageSize=20
gender:string="Male"
searchString!:string
  data:any=[]
constructor(
  private characterService:CharactersService
){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.characterService.getAll(this.page).subscribe((res)=>{
     
      this.data=res.results
      // this.page++;
//  for (this.page; this.page<=res.info.pages; this.page++) {
//   this.characterService.getAll(this.page).subscribe((res)=>{
//     this.data.push(res.results)
    
//   })
  
//     } 
    console.log(this.data)
    })
   
  }

  filterData(gender:string){
    gender=this.gender
    this.data=this.data.filter((data:any)=>data.gender==gender)
    this.gender=""
  }
}
