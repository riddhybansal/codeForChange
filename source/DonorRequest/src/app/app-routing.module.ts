import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employment',
    loadChildren: () =>
      import('./employment/employment.module').then((m) => m.EmploymentModule),
  },
  {
    path: 'donation',
    loadChildren: () =>
      import('./donation/donation.module').then((m) => m.DonationModule),
  },
  {
    path: 'sell',
    loadChildren: () =>
      import('./sell-portal/sell-portal.module').then(
        (m) => m.SellPortalModule
      ),
  },
  {
    path: 'trainings',
    loadChildren: () =>
      import('./trainings/trainings.module').then((m) => m.TrainingsModule),
  },
  {
    path: 'govt-schemes',
    loadChildren: () =>
      import('./gov-schemes/gov-schemes.module').then((m) => m.GovSchemesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
