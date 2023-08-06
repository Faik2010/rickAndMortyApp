import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../services/characters.service';
import { responseModel } from '../models/responseModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
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
data:any
  constructor(
    private activatedRoute:ActivatedRoute,
    private characterService:CharactersService,
    private router:Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.characterService.singleCharacter(params["id"]).subscribe(res=>{
        this.data=res
        this.responseModel=this.data
       
      })
    })
  }
  backToHome(){
    this.router.navigate(['home'])
  }
 

}
