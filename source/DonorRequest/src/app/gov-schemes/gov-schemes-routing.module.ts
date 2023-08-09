import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovSchemesComponent } from './gov-schemes.component';

const routes: Routes = [{ path: '', component: GovSchemesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovSchemesRoutingModule { }
