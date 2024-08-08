import { Component } from '@angular/core';
import { Constituency } from '../model/Constituency';
import { Voter } from '../model/Voter';
import { ConstituencyService } from '../service/constituency.service';
import { VoterService } from '../service/voter.service';

@Component({
  selector: 'app-search-by-constituency',
  templateUrl: './search-by-constituency.component.html',
  styleUrls: ['./search-by-constituency.component.css']
})
export class SearchByConstituencyComponent {
  selectValue:string='';
  constituencyName:string='';
  voterCount:number=0;
  constituencies:Constituency[]=[];
  voters:Voter[] =[];
 // voter=new Voter('',0,'');
  defaultMessage = "Select a Constituency";
  dropdown: any;

  constructor(private Cservice:ConstituencyService,private Vservice:VoterService){
    this.getConstituencies();
  }

  getConstituencies(){
    this.Cservice.getAllConstituencies().subscribe((result)=>this.constituencies=result)
  }
  getSelectedValue(){
    this.selectValue=this.dropdown?.nativeElement.value;
    this.constituencyName=this.selectValue;
    this.Vservice.getAllVotersByConstituency(this.selectValue).subscribe(
      (result)=>{
        //this.voters=result;
        this.Vservice.getVoterCountByConstituency(this.selectValue).subscribe(res=>this.voterCount=res)
      }
    )    
  }

}
