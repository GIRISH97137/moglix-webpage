import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolarEnergyMainpageComponent } from './solar-energy-mainpage/solar-energy-mainpage.component';
import { InfraWebpageComponent } from './infra-webpage/infra-webpage.component';

const routes: Routes = [
  {path : 'mainpage', component : SolarEnergyMainpageComponent},
  {path : 'infra', component : InfraWebpageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
