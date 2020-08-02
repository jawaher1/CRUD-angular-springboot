import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';

import {FormsModule} from '@angular/forms';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,


    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
