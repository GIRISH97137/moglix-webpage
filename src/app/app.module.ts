import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SolarEnergyMainpageComponent } from './solar-energy-mainpage/solar-energy-mainpage.component';
import { InfraWebpageComponent } from './infra-webpage/infra-webpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarEnergyMainpageComponent,
    InfraWebpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
