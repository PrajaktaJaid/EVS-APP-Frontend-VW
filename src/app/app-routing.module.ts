import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConstituencyComponent } from './add-constituency/add-constituency.component';
import { AddVoterComponent } from './add-voter/add-voter.component';
import { VotersListComponent } from './voters-list/voters-list.component';
import { VotersListByIdComponent } from './voters-list-by-id/voters-list-by-id.component';
import { HomeComponent } from './home/home.component';
import { SearchByConstituencyComponent } from './search-by-constituency/search-by-constituency.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"constituency",component:AddConstituencyComponent},
  {path:"add-voter",component:AddVoterComponent},
  {path:"voters-list",component:VotersListComponent},
  {path:"search-voter",component:VotersListByIdComponent},
  {path:"search-voter-by-constituency",component:SearchByConstituencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
