import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AddConstituencyComponent } from './add-constituency/add-constituency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVoterComponent } from './add-voter/add-voter.component';
import { VotersListComponent } from './voters-list/voters-list.component';
import { VotersListByIdComponent } from './voters-list-by-id/voters-list-by-id.component';
import { HomeComponent } from './home/home.component';
import { SearchByConstituencyComponent } from './search-by-constituency/search-by-constituency.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AddConstituencyComponent,
    AddVoterComponent,
    VotersListComponent,
    VotersListByIdComponent,
    HomeComponent,
    SearchByConstituencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
