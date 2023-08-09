import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovSchemesComponent } from './gov-schemes.component';
import { GovSchemesRoutingModule } from './gov-schemes-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    GovSchemesComponent
  ],
  imports: [
    CommonModule,
    GovSchemesRoutingModule,
    MatProgressSpinnerModule
    
  ]
})
export class GovSchemesModule { }
