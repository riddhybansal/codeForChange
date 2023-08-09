import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SellPortalRoutingModule } from './sell-portal-routing.module';
import { SellPortalComponent } from './sell-portal.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SellPortalComponent, AddProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    SellPortalRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class SellPortalModule {}
