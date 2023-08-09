import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './donation.component';
import { RequestDonationComponent } from './request-donation/request-donation.component';

const routes: Routes = [
  { path: '', component: DonationComponent },
  { path: 'request-donation', component: RequestDonationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
