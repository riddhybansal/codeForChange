import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [TrainingsComponent],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class TrainingsModule {}
