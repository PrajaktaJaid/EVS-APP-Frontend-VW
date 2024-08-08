import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConstituencyService } from '../service/constituency.service';
import { Constituency } from '../model/Constituency';

@Component({
  selector: 'app-add-constituency',
  templateUrl: './add-constituency.component.html',
  styleUrls: ['./add-constituency.component.css']
})
export class AddConstituencyComponent implements OnInit {
  constituencies:Constituency[]=[];
  submitted = false;
  successMessage='';
  constituencyForm:FormGroup=new FormGroup({name: new FormControl('')})
  constructor(private fb: FormBuilder,private constituencyService:ConstituencyService){
    this.getConstituencies();
  }
  ngOnInit(): void {
    this.constituencyForm = this.fb.group({
      name:['',[Validators.required]]
    })
  }
  get constituencyFormControl(){
    return this.constituencyForm.controls;
  }
  onSubmit(){
    const isFormValid = this.constituencyForm.valid;
    this.submitted = true;
    if (this.constituencyForm.invalid) {
      return;
    }
    const formData = this.constituencyForm.value;
    this.constituencyService.createConstituency(formData).subscribe(response=>{
              if(response.status === 201){
                 this.showSuccessMessage("New Constituency Added Successfully");
                 this.getConstituencies();
               }else{
                this.showSuccessMessage("Error Adding Constituency");
               }
  
         });
  }
  getConstituencies(){
    this.constituencyService.getAllConstituencies().subscribe((result)=>this.constituencies=result);
  }
  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    },900); 
  }
}
