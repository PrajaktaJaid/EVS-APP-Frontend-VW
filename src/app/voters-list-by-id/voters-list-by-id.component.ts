import { Component } from '@angular/core';
import { VoterService } from '../service/voter.service';
import { Voter } from '../model/Voter';

@Component({
  selector: 'app-voters-list-by-id',
  templateUrl: './voters-list-by-id.component.html',
  styleUrls: ['./voters-list-by-id.component.css']
})
export class VotersListByIdComponent {
  searchId=0;
  isLoaded=false;
  voter=new Voter('',0,'');
  constructor(private voterService:VoterService){}
  onSearch(){
    this.voterService.getVoterDetailsById(this.searchId).subscribe((result)=>{this.voter=result;this.isLoaded=true;});
  }

}
