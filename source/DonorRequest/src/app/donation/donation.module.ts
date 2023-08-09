import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from "@angular/material/card";
import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { RequestDonationComponent } from './request-donation/request-donation.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DonationComponent,
    RequestDonationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DonationRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class DonationModule { }
