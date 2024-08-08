import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constituency } from '../model/Constituency';
import { ConstituencyService } from '../service/constituency.service';
import { VoterService } from '../service/voter.service';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit{
  constituencies:Constituency[]=[];
  submitted=false;
  successMessage='';
  voterForm: FormGroup=new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl(''),
    constituencyId:new FormControl(''),
  });


  constructor(private fb: FormBuilder,private consistuencyService:ConstituencyService,private voterService:VoterService) {   this.getConstituencies(); }
  ngOnInit() {
    this.voterForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      constituencyId: ['', Validators.required]
    });

}

get voterFormControl(){
  return this.voterForm.controls;
}
onSubmit(): void { 
  const isFormValid = this.voterForm.valid;
  this.submitted = true;
  
  if (this.voterForm.invalid) {
    return;
  }
  const formData = this.voterForm.value;
  formData.constituencyId = +formData.constituencyId;
  this.voterService.createVoter(formData).subscribe(response=>{
    if(response.status === 201){
       this.showSuccessMessage("New Voter Added Successfully");
     }else{
      this.showSuccessMessage("Error while Adding New Voter");
     }

})
}
getConstituencies(){
  this.consistuencyService.getAllConstituencies().subscribe((result)=>console.log(this.constituencies=result));
}
showSuccessMessage(message: string) {
  this.successMessage = message;
  setTimeout(() => {
    this.successMessage = '';
  },900); 
}
}