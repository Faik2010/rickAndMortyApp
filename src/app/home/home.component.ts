import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { responseModel } from '../models/responseModel';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  genders=[
    "Male",
    "Female",
    "Genderless",
    "unknown"
  ]
  statuses=[
    "Dead",
    "Alive",
    "unknown"
  ]
page=1
currentPage=4
pageSize=20
total!:number
gender!:string
searchString!:string
name!:string
status!:string
form!:FormGroup
  data:any=[]
constructor(
  private characterService:CharactersService,
  private formBuilder:FormBuilder,
  private toastr:ToastrService,
){}

  ngOnInit(): void {
    this.createForm()
    this.getAll()
  }

  getAll(){
    this.characterService.getAll(this.page).subscribe((res)=>{
     this.total=res.info.count
      this.data=res.results
 
    
    })
   
  }
  pageChange(event:number){
    this.page=event
    this.getAll()
  }
  getFilteredData(){
    this.characterService.filterData(this.page, this.status, this.gender).subscribe((res)=>{
      this.total=res.info.count
      this.data=res.results
    },(err)=>{
      this.toastr.error(err.error.error)
    })
  }

  filterData(gender:string){
    gender=this.gender
    this.data=this.data.filter((data:any)=>data.gender==gender)
    this.gender=""
  }
  createForm(){
    this.form=this.formBuilder.group({
      status:[""],
      gender:[""],
      name:[""],
    })
  }
}
