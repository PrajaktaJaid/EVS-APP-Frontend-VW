import { Component, OnInit } from '@angular/core';
import { Voter } from '../model/Voter';
import { VoterService } from '../service/voter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.css']
})
export class VotersListComponent implements OnInit{

  genderForm: FormGroup = new FormGroup({
    genderControl: new FormControl(''),
  });
  voters:Voter[]=[];
  votersCount:number=0;
  voterLabel="Available Voters"
  constructor(private voterService:VoterService){}
  ngOnInit():void
  {
    this.getVoters();
    this.getVotersCount();
    this.genderForm.controls['genderControl'].valueChanges
                                .subscribe((res:string)=>{
                                      if(res){
                                        this.getVoterCountByGender(res);
                                      }
                                 })
}
  getVoters(){
    this.voterService.getAllVoters().subscribe((result)=>this.voters=result);
  }
  getVotersCount(){
    this.voterService.getAllVotersCount().subscribe((result)=>{this.votersCount=result})
  }
  getVoterCountByGender(name:String){
    this.voterService.getAllVoterCountByGender(name).subscribe((result)=>{this.votersCount=result})
  }
}
